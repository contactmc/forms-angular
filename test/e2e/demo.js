'use strict';

describe('Forms app demo', function() {

    it('should automatically redirect to index when location hash/fragment is empty', function () {
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('\/index');
    });

//    it('should support schema findFunctions');
//    it('should allow selections from a global search box')
});
