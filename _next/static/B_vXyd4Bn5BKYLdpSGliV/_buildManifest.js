self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/chocofantasy-preview/uploads/:path*"
      },
      {
        "source": "/chocofantasy-preview/medusa-static/:path*"
      },
      {
        "source": "/chocofantasy-preview/crm-media/:file"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()