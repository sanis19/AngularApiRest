
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { AlumnoComponent } from './alumno/alumno.component'
import { ProductComponent } from './product/product.component'
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'product', component: ProductComponent },
    { path: 'agregar-alumno', component: AgregarAlumnoComponent },
    { path: 'update-alumno', component: UpdateAlumnoComponent },
    { path: 'musica', component: SearchComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);