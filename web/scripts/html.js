/** HTML tags **/
bracketed = (value, opening, closing) => `${opening}${value}${closing}`;
angled = value => bracketed(value, '<', '>');
closing_tag = value => bracketed(value, '</', '>');
tag_attributes = a => (typeof a === 'object' || (is_array(a) && a.length > 0) ? SPACE + expand(a) : '---');
tag_base = (name, attributes, closed = true) => angled(cc([name, tag_attributes(attributes), closed ? '' : '/']));
tag = (tag_name, content, attributes) => cc([tag_base(tag_name, attributes), expand(content), closing_tag(tag_name)]);
div = (content, attributes) => tag('div', content, attributes);
dot = (class_names, content) => tag('div', content, {'class': class_names});
hash = (id, content) => div(content, {id: id});
button = (content, attributes) => tag('button', content, attributes);
svg = (content, attributes) => tag('svg', content, attributes);
circle = (attributes) => tag_base('circle', attributes, false);
