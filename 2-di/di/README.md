# Di


## Provider

{ token, recipe }

- in module
- in component
- provideIn

### Token

- string (don't use)
- class
- InjectionToken  (old OpaqueToken)

```
 InjectionToken('UserService', {
     provideIn: 'root',
     factory: () => new UserService()
 });
```

### Recipe

- useClass (shortcut)
- useValue
- useFactory
- useExisting


## Injector

- How to injector?
- Not Singleton


ReflectiveInjector => StaticInjector

Platform, Compile, NgZone - ReflectiveInjector => StaticInjector
Module, Component - not ReflectiveInjector




