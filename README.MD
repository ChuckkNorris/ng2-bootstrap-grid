# ng2-bootstrap-grid

## Installation

To install this library, run:

```bash
$ npm install ng2-bootstrap-grid --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng2-bootstrap-grid
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    BootstrapGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

First, wrap your `app.component.html` content with `bootstrap-grid`
```xml
<bootstrap-grid>
  <!--Rest of application here-->
</bootstrap-grid>
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:
```xml
<!-- You can now use your library component in app.component.html -->
<container>
  <row>
    <column sm="6" md="4" lg="3">
      Column 1
    </column>
    <column sm="6" md="4" lg="3">
      Column 2
    </column>
    <column sm="6" md="4" lg="3">
      Column 3
    </column>
    <column sm="6" md="4" lg="3">
      Column 4
    </column>
  </row>
  <row>
    <column sm="6" smPush="3" smPull="3">
      Centered Column
    </column>
  </row>
</container>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Levi Fuller](mailto:lfuller941@gmail.com)
