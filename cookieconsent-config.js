import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js";

// Run the configuration
CookieConsent.run({
  // Define cookie categories
  categories: {
    necessary: {
      enabled: true,  // this category is enabled by default
      readOnly: true  // this category cannot be disabled
    },
    analytics: {
      enabled: false  // disabled by default
    }
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie usage',
              description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
            },
            {
              title: 'Strictly Necessary cookies',
              description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics cookies',
              description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  },

  onAccept: function (cookie) {
    // if analytics category is accepted, load gtag
    if (CookieConsent.allowedCategory("analytics")) {
      loadGoogleAnalytics();
    }
  },

  onChange: function (cookie, changed_categories) {
    // If analytics category is accepted, load gtag
    if (CookieConsent.allowedCategory("analytics")) {
      loadGoogleAnalytics();
    }
  }
});

// Function to load Google Analytics
function loadGoogleAnalytics() {
  if (!document.getElementById("ga-script")) {
    // Load Google Analytics script
    var script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZQFPSH5K90";
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-ZQFPSH5K90");
  }
}
