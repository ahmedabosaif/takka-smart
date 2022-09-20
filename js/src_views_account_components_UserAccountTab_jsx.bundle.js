"use strict";
(self["webpackChunkecommerce_react"] = self["webpackChunkecommerce_react"] || []).push([["src_views_account_components_UserAccountTab_jsx"],{

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








var UserProfile = function UserProfile(props) {
  var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.profile;
  });
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
    onClick: function onClick() {
      return props.history.push(constants_routes__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_EDIT);
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3ZpZXdzX2FjY291bnRfY29tcG9uZW50c19Vc2VyQWNjb3VudFRhYl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0VBQzdCLElBQU1DLE9BQU8sR0FBR0osd0RBQVcsQ0FBQyxVQUFDSyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxPQUFqQjtFQUFBLENBQUQsQ0FBM0I7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMseUJBRlo7SUFHRSxHQUFHLEVBQUVBLE9BQU8sQ0FBQ0U7RUFIZixFQURGLENBREYsZUFRRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMsa0JBRlo7SUFHRSxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7RUFIZixFQURGLENBUkYsZUFlRTtJQUNFLFNBQVMsRUFBQyx1Q0FEWjtJQUVFLE9BQU8sRUFBRTtNQUFBLE9BQU1KLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUFkLENBQW1CYiwwREFBbkIsQ0FBTjtJQUFBLENBRlg7SUFHRSxJQUFJLEVBQUM7RUFIUCxrQkFmRixDQURGLGVBd0JFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUFtQ1EsT0FBTyxDQUFDTSxRQUEzQyxDQURGLGVBR0UsdUVBSEYsZUFJRSw0REFKRixlQUtFLDZEQUFLTixPQUFPLENBQUNPLEtBQWIsQ0FMRixlQU1FLHlFQU5GLGVBT0UsNERBUEYsRUFRR1AsT0FBTyxDQUFDUSxPQUFSLGdCQUNDLDZEQUFLUixPQUFPLENBQUNRLE9BQWIsQ0FERCxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLHFCQVhKLGVBY1IsNEZBZFEsRUFlR1IsT0FBTyxDQUFDUyxLQUFSLGdCQUNEO0lBQUcsSUFBSSxFQUFFVCxPQUFPLENBQUNTLEtBQWpCO0lBQXdCLE1BQU0sRUFBQztFQUEvQixnQkFEQyxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLHFDQWxCSixlQW9CRSw0REFwQkYsc0JBb0JXLDREQXBCWCxlQXNCRSxpRkF0QkYsZUF1QkUsNERBdkJGLEVBd0JHVCxPQUFPLENBQUNVLE1BQVIsZ0JBQ0MsNkRBQUtWLE9BQU8sQ0FBQ1UsTUFBUixDQUFlQyxLQUFwQixDQURELGdCQUdDO0lBQUksU0FBUyxFQUFDO0VBQWQsNkJBM0JKLGVBNkJZLGlGQTdCWixlQThCRSw0REE5QkYsRUErQkdYLE9BQU8sQ0FBQ1ksU0FBUixnQkFDQyw2REFBS1osT0FBTyxDQUFDWSxTQUFSLENBQWtCRCxLQUF2QixDQURELGdCQUdDO0lBQUksU0FBUyxFQUFDO0VBQWQsNkJBbENKLGVBcUNFLDZFQXJDRixlQXNDRSw0REF0Q0YsRUF1Q0dYLE9BQU8sQ0FBQ2EsVUFBUixnQkFDQyw2REFBS3BCLDBEQUFXLENBQUNPLE9BQU8sQ0FBQ2EsVUFBVCxDQUFoQixDQURELGdCQUdDO0lBQUksU0FBUyxFQUFDO0VBQWQsbUJBMUNKLENBeEJGLENBREYsQ0FERjtBQTBFRCxDQTdFRDs7QUErRUFmLFdBQVcsQ0FBQ2dCLFNBQVosR0FBd0I7RUFDdEJWLE9BQU8sRUFBRVYsdURBQUEsQ0FBZTtJQUN0QlcsSUFBSSxFQUFFWCx3REFBYXNCO0VBREcsQ0FBZixFQUVOQztBQUhtQixDQUF4QjtBQU1BLGlFQUFlcEIsNERBQVUsQ0FBQ0MsV0FBRCxDQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1yZWFjdC8uL3NyYy92aWV3cy9hY2NvdW50L2NvbXBvbmVudHMvVXNlckFjY291bnRUYWIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbic7XG5pbXBvcnQgeyBBQ0NPVU5UX0VESVQgfSBmcm9tICdjb25zdGFudHMvcm91dGVzJztcbmltcG9ydCB7IGRpc3BsYXlEYXRlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgUHJvcFR5cGUgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHByb2ZpbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2ZpbGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJhbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJhbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2VMb2FkZXJcbiAgICAgICAgICAgICAgYWx0PVwiQmFubmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJhbm5lci1pbWdcIlxuICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGUuYmFubmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1hdmF0YXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPEltYWdlTG9hZGVyXG4gICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1pbWdcIlxuICAgICAgICAgICAgICBzcmM9e3Byb2ZpbGUuYXZhdGFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNtYWxsIHVzZXItcHJvZmlsZS1lZGl0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmhpc3RvcnkucHVzaChBQ0NPVU5UX0VESVQpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRWRpdCBBY2NvdW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1kZXRhaWxzXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+e3Byb2ZpbGUuZnVsbG5hbWV9PC9oMj5cblxuICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxoNT57cHJvZmlsZS5lbWFpbH08L2g1PlxuICAgICAgICAgIDxzcGFuPkFkZHJlc3M8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3Byb2ZpbGUuYWRkcmVzcyA/IChcbiAgICAgICAgICAgIDxoNT57cHJvZmlsZS5hZGRyZXNzfTwvaDU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkFkZHJlc3Mgbm90IHNldDwvaDU+XG4gICAgICAgICAgKX1cblxuPHNwYW4+R29vZ2xlIE1hcHMgTG9jYXRpb24gVVJMOiA8L3NwYW4+XG4gICAgICAgICAge3Byb2ZpbGUuZ01hcHMgPyAoXG4gICAgICAgICAgPGEgaHJlZj17cHJvZmlsZS5nTWFwc30gdGFyZ2V0PVwiX2JsYW5rXCI+Q2xpY2sgSGVyZTwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3VidGxlIHRleHQtaXRhbGljXCI+TG9jYXRpb24gb24gR29vZ2xlIE1hcHMgbm90IHNldDwvaDU+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnIgLz4gICA8YnIgLz5cblxuICAgICAgICAgIDxzcGFuPlBlcnNvbmFsIE1vYmlsZTwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7cHJvZmlsZS5tb2JpbGUgID8gKFxuICAgICAgICAgICAgPGg1Pntwcm9maWxlLm1vYmlsZS52YWx1ZX08L2g1PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWJ0bGUgdGV4dC1pdGFsaWNcIj5QZXJzb25hbCBNb2JpbGUgbm90IHNldDwvaDU+XG4gICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnVzaW5lc3MgTW9iaWxlPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHtwcm9maWxlLmJpc01vYmlsZSA/IChcbiAgICAgICAgICAgIDxoNT57cHJvZmlsZS5iaXNNb2JpbGUudmFsdWV9PC9oNT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3VidGxlIHRleHQtaXRhbGljXCI+QnVzaW5lc3MgTW9iaWxlIG5vdCBzZXQ8L2g1PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8c3Bhbj5EYXRlIEpvaW5lZDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7cHJvZmlsZS5kYXRlSm9pbmVkID8gKFxuICAgICAgICAgICAgPGg1PntkaXNwbGF5RGF0ZShwcm9maWxlLmRhdGVKb2luZWQpfTwvaDU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPk5vdCBhdmFpbGFibGU8L2g1PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG4gIGhpc3Rvcnk6IFByb3BUeXBlLnNoYXBlKHtcbiAgICBwdXNoOiBQcm9wVHlwZS5mdW5jXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVXNlclByb2ZpbGUpO1xuIl0sIm5hbWVzIjpbIkltYWdlTG9hZGVyIiwiQUNDT1VOVF9FRElUIiwiZGlzcGxheURhdGUiLCJQcm9wVHlwZSIsIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJ3aXRoUm91dGVyIiwiVXNlclByb2ZpbGUiLCJwcm9wcyIsInByb2ZpbGUiLCJzdGF0ZSIsImJhbm5lciIsImF2YXRhciIsImhpc3RvcnkiLCJwdXNoIiwiZnVsbG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJnTWFwcyIsIm1vYmlsZSIsInZhbHVlIiwiYmlzTW9iaWxlIiwiZGF0ZUpvaW5lZCIsInByb3BUeXBlcyIsInNoYXBlIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9