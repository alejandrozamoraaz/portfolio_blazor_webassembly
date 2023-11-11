window.culture = {
    get: () => window.localStorage['Culture'],
    set: (value) => window.localStorage['Culture'] = value
};
