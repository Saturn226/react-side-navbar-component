"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _semanticUIReact = semanticUIReact;
var Menu = _semanticUIReact.Menu;

var MainPageComponent = function (_React$Component) {
  _inherits(MainPageComponent, _React$Component);

  function MainPageComponent() {
    _classCallCheck(this, MainPageComponent);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MainPageComponent.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "main" },
      React.createElement(
        "h2",
        null,
        "Fixed Full-height Side Nav"
      ),
      React.createElement(
        "h3",
        null,
        "Try to scroll this area, and see how the sidenav sticks to the page"
      ),
      React.createElement(
        "p",
        null,
        "Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div."
      ),
      React.createElement(
        "p",
        null,
        "Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it)."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      ),
      React.createElement(
        "p",
        null,
        "Some text.."
      )
    );
  };

  return MainPageComponent;
}(React.Component);

var SideNavComponent = function (_React$Component2) {
  _inherits(SideNavComponent, _React$Component2);

  function SideNavComponent(props) {
    _classCallCheck(this, SideNavComponent);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { activeItem: "home" };
    _this2.handleItemClick = _this2.handleItemClick.bind(_this2);
    return _this2;
  }

  SideNavComponent.prototype.handleItemClick = function handleItemClick(e, _ref) {
    var name = _ref.name;

    this.setState({ activeItem: name });
  };

  SideNavComponent.prototype.render = function render() {
    var activeItem = this.state.activeItem;

    return React.createElement(
      "div",
      null,
      React.createElement(
        Menu,
        { vertical: true, id: "side-menu" },
        React.createElement(Menu.Item, {
          name: "home",
          active: activeItem === "home",
          onClick: this.handleItemClick
        }),
        React.createElement(Menu.Item, {
          name: "messages",
          active: activeItem === "messages",
          onClick: this.handleItemClick
        }),
        React.createElement(Menu.Item, {
          name: "friends",
          active: activeItem === "friends",
          onClick: this.handleItemClick
        })
      ),
      ")",
      React.createElement(MainPageComponent, null)
    );
  };

  return SideNavComponent;
}(React.Component);

ReactDOM.render(React.createElement(SideNavComponent, null), document.getElementById("app"));