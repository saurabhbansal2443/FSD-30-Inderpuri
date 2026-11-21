import React from "react";

const App = () => {
  return (
    <div style={style.root}>
      <div style={style.searchWrapper}>
        <div style={style.searchBox}>
          <span style={style.searchIcon}>⌕</span>
          <input
            style={style.input}
            type="text"
            placeholder="Search products..."
          />
        </div>

        <div style={style.suggestionContainer}>
          <p style={style.suggestionHeading}>SUGGESTIONS</p>

          <div style={style.suggestion}>
            <img style={style.productIcon} src="" />
            <p style={style.suggestionText}>iPhone</p>
            <span style={style.suggestionArrow}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const style = {
  root: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "100px 20px",
    fontFamily: "Arial, sans-serif",
  },

  searchWrapper: {
    width: "100%",
    maxWidth: "550px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #dfe3eb",
    borderRadius: "12px",
    padding: "0 16px",
    height: "55px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  searchIcon: {
    fontSize: "25px",
    color: "#777",
    marginRight: "12px",
  },

  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "#222",
    backgroundColor: "transparent",
    minWidth: 0,
  },

  shortcut: {
    fontSize: "12px",
    color: "#888",
    backgroundColor: "#f1f2f5",
    padding: "5px 9px",
    borderRadius: "5px",
  },

  suggestionContainer: {
    marginTop: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
  },

  suggestionHeading: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#999",
    letterSpacing: "1px",
    padding: "0 10px",
    margin: "5px 0 10px",
  },

  suggestion: {
    display: "flex",
    alignItems: "center",
    padding: "12px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.2s",
  },

  productIcon: {
    fontSize: "20px",
    marginRight: "14px",
  },

  suggestionText: {
    flex: 1,
    fontSize: "15px",
    color: "#333",
    margin: 0,
  },

  suggestionArrow: {
    color: "#aaa",
    fontSize: "16px",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #eee",
    marginTop: "8px",
    padding: "12px 10px 2px",
    fontSize: "11px",
    color: "#999",
  },
};
