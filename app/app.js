app = {
  sysconf: {},
  header: function() {
    return m("div.blueheader", [
      m("b", document.title),
      m("div.logo", m(m.route.Link, { selector: "a", href: "/" }, "gunb")),
      m("div.hamburger", [
        m("input.openSidebarMenu[type=checkbox][id=openSidebarMenu]"),
        m("label.sidebarIconToggle[for=openSidebarMenu]", [
          m("div.spinner diagonal part-1"),
          m("div.spinner horizontal"),
          m("div.spinner diagonal part-2")
        ]),
        m(
          "div[id=sidebarMenu]",
          m("ul.sidebarMenuInner", [
            // m("li.MenuTop", "Auswahl"),
            m("li", m(m.route.Link, { selector: "a", href: "/" }, "Index")),
            m("li", m(m.route.Link, { selector: "a", href: "/info" }, "Info"))
          ])
        )
      ])
    ]);
  }
};

page = {
  card: function(content) {
    return m("div.card", content);
  }
};

Index = {
  oninit: function() {
    document.title = "M::" + "Index";
  },
  view: function() {
    return [
      app.header(),
      m("main", m("div.cards", [page.card([m("h3", "Index")])]))
    ];
  }
};

Info = {
  oninit: function() {
    document.title = "M::" + "Info";
  },
  view: function() {
    urls = [
      { url: "https://mithril.js.org/api.html", text: "mithril" },
      //		  {url: "https://mermaid-js.github.io/mermaid/#/sequenceDiagram", text: "mermaid Anleitung"},
      //		  {url: "https://mermaidjs.github.io/mermaid-live-editor", text: "mermaid Ausprobieren"},
      { url: "https://pouchdb.com/api.html", text: "pouchdb" },
      { url: "https://lodash.com/docs/4.17.15", text: "lodash" }
      //		  {url: "", text: ""},
    ];
    return [
      app.header(),
      m(
        "main",
        m("div.cards", [
          page.card([
            m("h3", "API-Dokumentationen"),
            m(
              "ul",
              urls.map(function(u) {
                return m(
                  "li",
                  m("a", { target: "_blank", href: u.url }, u.text)
                );
              })
            )
          ])
        ])
      )
    ];
  }
};

window.onload = function() {
  m.route(document.body, "/", {
    "/": Index,
    "/info": Info
  });
};
