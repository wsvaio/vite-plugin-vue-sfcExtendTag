export default () => {
    return {
        name: "plugin-vue:sfcExtendTag",
        transform(code, id, options) {
            if (!id.endsWith(".vue"))
                return;
            const matched = code.match(/(<template[^>]*?(tag\s*?=\s*?"(\w*?)")[^>]*?>)(.*)<\/template>/msi);
            if (matched) {
                const [, template, tag, tagName, content] = matched;
                const t = template + template.replace(tag, "").replace("template", tagName) + content + `</${tagName}></template>`;
                code = code.replace(/<template[^>]*?>.*<\/template>/msi, t);
            }
            return code;
        },
    };
};
