self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/chocofantasy-preview(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api\\/|_next\\/|uploads\\/|medusa-static\\/|crm-media\\/|.*\\.\\w+$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api/|_next/|uploads/|medusa-static/|crm-media/|.*\\.\\w+$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()