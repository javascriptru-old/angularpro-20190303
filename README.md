# angularpro-20190303


## Дополнительные вопросы

- Проецировние content -> view: ViewChild получить спроецированный контент

Нет, проецирования не проиходит - https://stackblitz.com/edit/angular-35v9ow?file=src%2Fapp%2Fapp.component.ts

- exportAs & Injector

Директивы по умолчанию не хранятся в инжекторе. Декоратор их складывает при инициализации во внутреннее хранилище модуля (LocalModuleScope)
А само условие находится тут - /packages/core/src/render3/instructions.ts#L2018

- пример на несколько параметров структурной директивы

https://stackblitz.com/edit/ng-str-directive-multi-params

- пример с хост директивой для динамического компонента (?ошибка)

мы просто опечатались: селектор директивы и применный селектор отличались.
исправил, можете смотреть в директории dynamic-components

- *ngIf="userInfo$ | async as userInfo" vs let-userInfo="userInfo$ | async" *ngIf="userInfo"

Предпочтительно использовать первый способ. `let-` используется для проекции переменных во вью структурной директивы

- компилировать бандл в один файл

angular-cli из коробки не позволяет это делать, 
но можно использовать расширение - https://github.com/manfredsteyer/ngx-build-plus

- { provide: UserService, useExisting: AdminService}

https://stackblitz.com/edit/ng-use-existing?file=src%2Fmain.ts

- пример AsyncSubject

концепт довольно теоретический, все возможные примеры можно реализовать через другие виды Subject.
обсуждение, которое начал преподаватель мастер-классов по реактивному программированию - https://twitter.com/Michael_Hladky/status/1081563545077198854

- если выключить зоны, то роуты не работают

Все работает - https://stackblitz.com/edit/ng-no-zones-router?file=src%2Fmain.ts

- SW: cache API config // dataGroups

разобрали уже на занятии - https://angular.io/guide/service-worker-config#datagroups

- атака MITM с https сертификатами

https://stackoverflow.com/a/14907718

- как запустить инстанс сервиса, не инжектя его? (email Arseny Matisov )

Не дождался описания задачи от Arseny Matisov