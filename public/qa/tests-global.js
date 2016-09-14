suite('Global Tests', function() {
    test('У данной страницы доспустимый заголовок', function() {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
        });
});
