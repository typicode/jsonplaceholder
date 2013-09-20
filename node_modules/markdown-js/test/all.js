var markdown = require('markdown-js')

exports.testH1 = function (assert) {
    assert.equal(markdown.parse('Hi\n='), '<h1>Hi</h1>', 'test <h1>')
};

exports.testP = function (assert) {
    assert.equal(markdown.parse('Paragraph.'), '<p>Paragraph.</p>', 'test <p>')
};

if (require.main == module) require('test').run(exports)
