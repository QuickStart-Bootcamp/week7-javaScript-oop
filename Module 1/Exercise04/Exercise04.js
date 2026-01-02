let o = { get foo() { return 17; } }; // source: https://devdocs.io/javascript/global_objects/object/getownpropertydescriptor

Object.defineProperty(o, 'fooSquared', {
    get() { return this.foo ** 2; }
 });

 console.log(o.foo, o.fooSquared);
 o.foo = 5; // ignored
 o.fooSquared = 5; // ignored
 console.log(o.foo, o.fooSquared);
