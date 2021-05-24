(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{191:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"初始化数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据"}},[a._v("#")]),a._v(" 初始化数据")]),a._v(" "),t("p",[a._v("本系统使用mysql数据库和mongodb数据库，其中mysql存放基础配置数据，mongodb存放业务数据。（后期可能会全面切换到mysql数据库，此是后话）")]),a._v(" "),t("ul",[t("li",[a._v("mysql(安装5.5以上的版本)\n"),t("ul",[t("li",[a._v("创建数据库"),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" waimai "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARSET")]),a._v(" utf8 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8_general_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waimai'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waiMAI@123'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" waimai"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waimai'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nflush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[a._v("数据初始化，无需手动初始化数据，flash-waimai-api启动的时候会根据配置自动导入初始化数据(import.sql)，第二次启动的时候如果不需要重新初始化语句，则可以注释掉配置"),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.jpa.hibernate.ddl-auto")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("create")]),a._v("\n")])])])])])]),a._v(" "),t("li",[a._v("mongodb(安装4.0的版本)\n"),t("ul",[t("li",[a._v("创建mongodb库"),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" flash"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("waimai\n")])])])]),a._v(" "),t("li",[a._v("初始化数据，由于测试数据量较大，将测试数据打包放在了百度云盘：链接："),t("a",{attrs:{href:"https://pan.baidu.com/s/1mfO7yckFL7lMb_O0BPsviw",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pan.baidu.com/s/1mfO7yckFL7lMb_O0BPsviw"),t("OutboundLink")],1),a._v("  提取码：apgd 下载后将文件解压到d:\\elm，使用如下命令导入数据："),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongorestore.exe -d flash-waimai d:\\\\elm\n")])])])])])]),a._v(" "),t("li",[a._v("测试图片数据，系统中测试数据中包含了大量的商铺，食品图片。\n"),t("ul",[t("li",[a._v("由于数据量较大， 放在了百度云盘，链接："),t("a",{attrs:{href:"https://pan.baidu.com/s/1rvZDspoapWa6rEq2D_5kzw",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pan.baidu.com/s/1rvZDspoapWa6rEq2D_5kzw"),t("OutboundLink")],1),a._v(" 提取码：urzw ，")]),a._v(" "),t("li",[a._v("将图片存放到t_sys_cfg表中system.file.upload.path配置的目录下")])])])]),a._v(" "),t("h2",{attrs:{id:"清空测试数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清空测试数据"}},[a._v("#")]),a._v(" 清空测试数据")]),a._v(" "),t("p",[a._v("如果想清空所有测试数据，自己通过后台管理功能区录入测试数据，可以通过使用下面配置清空系统测试数据")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启该配置自动创建数据库")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.jpa.hibernate.ddl-auto")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("create")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否重新清空mongodb测试数据")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("flash.waimai.mongodb.init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("使用客户端连接mongodb数据库为shop表创建索引")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("db.shops.createIndex({location")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"2dsphere"})')]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);