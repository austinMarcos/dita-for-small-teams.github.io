
      // 
      // Javascript generated by HTML2 Toolkit plugin
      // 
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();

      
var objd65e96 = {
  label: " DITA For Small Teams",
  href: "topics/dita-for-small-teams.html", 
  target:"contentwin"
};
var d65e96 = new YAHOO.widget.TextNode(objd65e96, root, false);

var objd65e121 = {
  label: " DITA for Small Teams Tools",
  href: "topics/dfst-tools.html", 
  target:"contentwin"
};
var d65e121 = new YAHOO.widget.TextNode(objd65e121, d65e96, false);

var objd65e146 = {
  label: " git: Distributed and Shared Access to Content",
  href: "topics/tools-git.html", 
  target:"contentwin"
};
var d65e146 = new YAHOO.widget.TextNode(objd65e146, d65e121, false);

var objd65e171 = {
  label: " eXist-db: Enabling Search and Link Management",
  href: "topics/tools-exist-db.html", 
  target:"contentwin"
};
var d65e171 = new YAHOO.widget.TextNode(objd65e171, d65e121, false);

      
      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit);       
    