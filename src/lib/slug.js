import slug from 'slug';

export default name => slug(name, { mode: 'rfc3986' });
