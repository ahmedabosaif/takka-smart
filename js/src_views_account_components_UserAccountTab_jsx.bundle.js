"use strict";
(globalThis["webpackChunkecommerce_react"] = globalThis["webpackChunkecommerce_react"] || []).push([["src_views_account_components_UserAccountTab_jsx"],{

/***/ "./src/views/account/components/UserAccountTab.jsx":
/*!*********************************************************!*\
  !*** ./src/views/account/components/UserAccountTab.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common */ "./src/components/common/index.js");
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.js");
/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* eslint-disable indent */








const UserProfile = props => {
  const profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.profile);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__.ImageLoader, {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: profile.banner
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__.ImageLoader, {
    alt: "Avatar",
    className: "user-profile-img",
    src: profile.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: "button button-small user-profile-edit",
    onClick: () => props.history.push(constants_routes__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_EDIT),
    type: "button"
  }, "Edit Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    className: "user-profile-name"
  }, profile.fullname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.address) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Address not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Google Maps Location URL: "), profile.gMaps ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    href: profile.gMaps,
    target: "_blank"
  }, "Click Here") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Location on Google Maps not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Personal Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.mobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.mobile.value) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Personal Mobile not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Business Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.bisMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.bisMobile.value) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Business Mobile not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Date Joined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.dateJoined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, (0,helpers_utils__WEBPACK_IMPORTED_MODULE_2__.displayDate)(profile.dateJoined)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Not available"))));
};

UserProfile.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    push: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)(UserProfile));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3ZpZXdzX2FjY291bnRfY29tcG9uZW50c19Vc2VyQWNjb3VudFRhYl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8sV0FBVyxHQUFJQyxLQUFELElBQVc7RUFDN0IsTUFBTUMsT0FBTyxHQUFHSix3REFBVyxDQUFFSyxLQUFELElBQVdBLEtBQUssQ0FBQ0QsT0FBbEIsQ0FBM0I7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMseUJBRlo7SUFHRSxHQUFHLEVBQUVBLE9BQU8sQ0FBQ0U7RUFIZixFQURGLENBREYsZUFRRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMsa0JBRlo7SUFHRSxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7RUFIZixFQURGLENBUkYsZUFlRTtJQUNFLFNBQVMsRUFBQyx1Q0FEWjtJQUVFLE9BQU8sRUFBRSxNQUFNSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQmIsMERBQW5CLENBRmpCO0lBR0UsSUFBSSxFQUFDO0VBSFAsa0JBZkYsQ0FERixlQXdCRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FBbUNRLE9BQU8sQ0FBQ00sUUFBM0MsQ0FERixlQUdFLHVFQUhGLGVBSUUsNERBSkYsZUFLRSw2REFBS04sT0FBTyxDQUFDTyxLQUFiLENBTEYsZUFNRSx5RUFORixlQU9FLDREQVBGLEVBUUdQLE9BQU8sQ0FBQ1EsT0FBUixnQkFDQyw2REFBS1IsT0FBTyxDQUFDUSxPQUFiLENBREQsZ0JBR0M7SUFBSSxTQUFTLEVBQUM7RUFBZCxxQkFYSixlQWNSLDRGQWRRLEVBZUdSLE9BQU8sQ0FBQ1MsS0FBUixnQkFDRDtJQUFHLElBQUksRUFBRVQsT0FBTyxDQUFDUyxLQUFqQjtJQUF3QixNQUFNLEVBQUM7RUFBL0IsZ0JBREMsZ0JBR0M7SUFBSSxTQUFTLEVBQUM7RUFBZCxxQ0FsQkosZUFvQkUsNERBcEJGLHNCQW9CVyw0REFwQlgsZUFzQkUsaUZBdEJGLGVBdUJFLDREQXZCRixFQXdCR1QsT0FBTyxDQUFDVSxNQUFSLGdCQUNDLDZEQUFLVixPQUFPLENBQUNVLE1BQVIsQ0FBZUMsS0FBcEIsQ0FERCxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLDZCQTNCSixlQTZCWSxpRkE3QlosZUE4QkUsNERBOUJGLEVBK0JHWCxPQUFPLENBQUNZLFNBQVIsZ0JBQ0MsNkRBQUtaLE9BQU8sQ0FBQ1ksU0FBUixDQUFrQkQsS0FBdkIsQ0FERCxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLDZCQWxDSixlQXFDRSw2RUFyQ0YsZUFzQ0UsNERBdENGLEVBdUNHWCxPQUFPLENBQUNhLFVBQVIsZ0JBQ0MsNkRBQUtwQiwwREFBVyxDQUFDTyxPQUFPLENBQUNhLFVBQVQsQ0FBaEIsQ0FERCxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLG1CQTFDSixDQXhCRixDQURGLENBREY7QUEwRUQsQ0E3RUQ7O0FBK0VBZixXQUFXLENBQUNnQixTQUFaLEdBQXdCO0VBQ3RCVixPQUFPLEVBQUVWLHVEQUFBLENBQWU7SUFDdEJXLElBQUksRUFBRVgsd0RBQWFzQjtFQURHLENBQWYsRUFFTkM7QUFIbUIsQ0FBeEI7QUFNQSxpRUFBZXBCLDREQUFVLENBQUNDLFdBQUQsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtcmVhY3QvLi9zcmMvdmlld3MvYWNjb3VudC9jb21wb25lbnRzL1VzZXJBY2NvdW50VGFiLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nO1xuaW1wb3J0IHsgQUNDT1VOVF9FRElUIH0gZnJvbSAnY29uc3RhbnRzL3JvdXRlcyc7XG5pbXBvcnQgeyBkaXNwbGF5RGF0ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFByb3BUeXBlIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1ibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1iYW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1iYW5uZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPEltYWdlTG9hZGVyXG4gICAgICAgICAgICAgIGFsdD1cIkJhbm5lclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1iYW5uZXItaW1nXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9maWxlLmJhbm5lcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYXZhdGFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZUxvYWRlclxuICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtaW1nXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9maWxlLmF2YXRhcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zbWFsbCB1c2VyLXByb2ZpbGUtZWRpdFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oaXN0b3J5LnB1c2goQUNDT1VOVF9FRElUKX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEVkaXQgQWNjb3VudFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPntwcm9maWxlLmZ1bGxuYW1lfTwvaDI+XG5cbiAgICAgICAgICA8c3Bhbj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDU+e3Byb2ZpbGUuZW1haWx9PC9oNT5cbiAgICAgICAgICA8c3Bhbj5BZGRyZXNzPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtwcm9maWxlLmFkZHJlc3MgPyAoXG4gICAgICAgICAgICA8aDU+e3Byb2ZpbGUuYWRkcmVzc308L2g1PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWJ0bGUgdGV4dC1pdGFsaWNcIj5BZGRyZXNzIG5vdCBzZXQ8L2g1PlxuICAgICAgICAgICl9XG5cbjxzcGFuPkdvb2dsZSBNYXBzIExvY2F0aW9uIFVSTDogPC9zcGFuPlxuICAgICAgICAgIHtwcm9maWxlLmdNYXBzID8gKFxuICAgICAgICAgIDxhIGhyZWY9e3Byb2ZpbGUuZ01hcHN9IHRhcmdldD1cIl9ibGFua1wiPkNsaWNrIEhlcmU8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkxvY2F0aW9uIG9uIEdvb2dsZSBNYXBzIG5vdCBzZXQ8L2g1PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJyIC8+ICAgPGJyIC8+XG5cbiAgICAgICAgICA8c3Bhbj5QZXJzb25hbCBNb2JpbGU8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3Byb2ZpbGUubW9iaWxlICA/IChcbiAgICAgICAgICAgIDxoNT57cHJvZmlsZS5tb2JpbGUudmFsdWV9PC9oNT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3VidGxlIHRleHQtaXRhbGljXCI+UGVyc29uYWwgTW9iaWxlIG5vdCBzZXQ8L2g1PlxuICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkJ1c2luZXNzIE1vYmlsZTwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7cHJvZmlsZS5iaXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8aDU+e3Byb2ZpbGUuYmlzTW9iaWxlLnZhbHVlfTwvaDU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkJ1c2luZXNzIE1vYmlsZSBub3Qgc2V0PC9oNT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPHNwYW4+RGF0ZSBKb2luZWQ8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3Byb2ZpbGUuZGF0ZUpvaW5lZCA/IChcbiAgICAgICAgICAgIDxoNT57ZGlzcGxheURhdGUocHJvZmlsZS5kYXRlSm9pbmVkKX08L2g1PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWJ0bGUgdGV4dC1pdGFsaWNcIj5Ob3QgYXZhaWxhYmxlPC9oNT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVXNlclByb2ZpbGUucHJvcFR5cGVzID0ge1xuICBoaXN0b3J5OiBQcm9wVHlwZS5zaGFwZSh7XG4gICAgcHVzaDogUHJvcFR5cGUuZnVuY1xuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFVzZXJQcm9maWxlKTtcbiJdLCJuYW1lcyI6WyJJbWFnZUxvYWRlciIsIkFDQ09VTlRfRURJVCIsImRpc3BsYXlEYXRlIiwiUHJvcFR5cGUiLCJSZWFjdCIsInVzZVNlbGVjdG9yIiwid2l0aFJvdXRlciIsIlVzZXJQcm9maWxlIiwicHJvcHMiLCJwcm9maWxlIiwic3RhdGUiLCJiYW5uZXIiLCJhdmF0YXIiLCJoaXN0b3J5IiwicHVzaCIsImZ1bGxuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwiZ01hcHMiLCJtb2JpbGUiLCJ2YWx1ZSIsImJpc01vYmlsZSIsImRhdGVKb2luZWQiLCJwcm9wVHlwZXMiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==