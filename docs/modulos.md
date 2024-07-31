# Módulos

Los catálogos 

### Cotizaciones 
  Se puede cotizar por cliente un producto, acordando entre su información mas valores de los productos, aquí se define cada registro por cliente, separándolos para mayor orden, permitiendo agregar mas cotizaciones y el acceso al modo edición, que cuenta con información extra además de poder editar los valores de este registro.
  
  ![alt text](/docs/img/c1.png)

  En el formulario de creación, al usuario se le solicitará la información mostrada, identificando qué cliente desea cotizar y ciertas pautas extras que afectarán a la resolución del mismo.

  ![alt text](/docs/img/c2.png)

  Los productos encontrados dentro de la cotización se muestran en la tabla con su propia división, estos pueden ser agregados, editados y eliminados para llenar la información de los activos que el cliente solicita cotizar.

  Para poder agregar un nuevo activo a esta cotización, se necesita que el usuario agregue los mismos, seleccionado los que el cliente requiera.

   ![alt text](/docs/img/c3.png)

   Se pueden editar los valores de un producto cotizado, estos siendo definidos por el usuario para que se apliquen en la cotización del cliente y afectando al total del mismo.

   ![alt text](/docs/img/c4.png)

   Los datos de los activos cotizados terminan siendo calculados para brindarle al usuario y al cliente la información completa de los activos que se tiene agregados.

   ![alt text](/docs/img/c5.png)

   Esta información puede ser enviada hacia el correo del cliente para que cuente con los datos completos de su cotización.

   ![alt text](/docs/img/ov6.png)

### Órdenes de venta
  Para cada venta realizada en el sistema, se puede guardar un registro que contenga la información mas relevante y que permita al usuario conocer en qué estado se encuentra este, permitiendo agregar y entrar en el modo edición.
  
  ![alt text](/docs/img/ov1.png)

  Dentro del formulario para crear, se encuentran los campos requeridos que necesitan ser llenados, permitiendo al usaurio el guardarlos, este formulario es utilizado en el modo edición para mostrar los valores con los que este registro cuenta actualmente, además de contar con mayor información de esta orden.

 ![alt text](/docs/img/ov2.png)

 Para cada orden, esta cuenta con la información de los productos ingresados, estos son mostrados dentro de una tabla que permite conocer, ingresar, editar y eliminar estos datos de los productos adjuntos.

 Para poder ingresar uno nuevo, solo se necesita que el usaurio seleccione del listado de activos y presione el botón "Agregar".

 ![alt text](/docs/img/ov3.png)

En el formulario para editar este registro del producto, se puede modificar el valor por el cual se hacen los cobros, la cantidad en que esta es comprada y si se le desea aplicar un porcentaje de descuento por activo.

 ![alt text](/docs/img/ov4.png)

Se muestra el total de esta orden de venta, tomando en cuenta los valores ingresados en los registros de los productos asociados a esta orden.

 ![alt text](/docs/img/ov5.png)

Toda esta información puede ser enviada hacia el cliente que ha hecho esta compra por medio del correo electrónico con el que este fue ingresado.

 ![alt text](/docs/img/ov6.png)

### Cobranza 
  El módulo de cobranza toma en cuenta los valores de las órdenes de venta, los cuales, requerirán de seguimiento para poder completar los cobros de los mismos, mostrando sus datos y permitiendo entrar al modo edición que cuenta con más información relacionada con la cobranza.
  
  ![alt text](/docs/img/cob1.png)

En el modo edición se puede conocer la información de los cobros, permitiendo agregar y editar los ya existentes para mantener el historial de cada movimiento.

![alt text](/docs/img/cob2.png)

Para poder crear y editar estos valores, se da uso de un formulario que menciona los datos requeridos al usuario.

![alt text](/docs/img/cob3.png)

### Gastos Generales 
  Se puede conocer la información de los gastos generales, identificando dentro de los mismos como parte de tu almacén, estos siendo mostrados con las capacidades de poder agreaga mas registros, editarlos, eliminarlos y de poder observar el archivo ingresado como voucher.
  
  ![alt text](/docs/img/gg1.png)
![alt text](/docs/img/cc6.png)

Para poder agregar un nuevo registro se necesita llenar la información solicitada dentro del formulario, solicitando además de los datos, un archivo que cuente con el voucher, este siendo válido si se encuentra en un formato de imagen o PDF.

  ![alt text](/docs/img/gg2.png)

En casos de requerir una actualización, los unicos campos admisibles son el envío de un archivo nuevo con el voucher en caso de enviar uno erróneo, además del estatus de este gasto.

  ![alt text](/docs/img/gg3.png)

### Compras 
  Se puede conocer la información esencial de una compra accediendo a su módulo, en este se conoce la información de a qué proveedor se le ha comprado, quién lo hizo, y el nivel de prioridad con el que cuenta, pudiendo así crear más registros de compras realizadas y entrar al modo edición.
  
  ![alt text](/docs/img/co1.png)

  Para poder crear, se encuentra el formulario con la información solicitada, este mismo pudiendo ser utilizado por el modo edición para editar ciertos datos de la compra.

  ![alt text](/docs/img/co2.png)

  En el modo edición se puede obtener mas información del registro, además de actualizar su estado y nivel de prioridad.

![alt text](/docs/img/co3.png)

Se puede conocer la información de los detalles asociados a esta compra, pudiendo agregar mas para que este termine siendo acumulado en el hisotrial de esta compra, editando sus valores y eliminando los registros incorrectos.

![alt text](/docs/img/co5.png)

Además se puede obtener el total de esta compra, obtenida en base a los movimientos efectuados dentro de los detalles de la compra, diferenciando el subtotal, los impuestos y descuentos aplicados, para mostrar el total de esta compra en tiempo real.

![alt text](/docs/img/co4.png)

Se puede obtener toda la información de esta compra directamente en el correo electrónico del usuario en sesión.

![alt text](/docs/img/co6.png)

### Caja Chica 
  La caja chica permite ingresar valores de apertura y cierre de cajas, estas, cuentan con información que se puede desenglosar en mas información, esta, agregándole mas contexto y valores referidos que afectarán a este registro único, entre las opciones se encuentra el poder agregar una nueva caja chica, y el acceso al modo edición que contiene mas información y la capacidad de modificar los valores.
  
  ![alt text](/docs/img/cc1.png)

  Para crear un nuevo registro de caja chica, se le solicita que ingrese la información en el formulario, esta información da mayor conocimiento del mismo además de ser la piedra angular de los siguientes valores encontrados en el modo edición.

  Dentro del modo edición se puede modificar estos valores ingresados, dando uso del mismo formulario que el usado al momento de crear, pero pudiendo modificar unicamente el estado en que esta caja chica se encuentra.

  ![alt text](/docs/img/cc2.png)

  En el caso anterior, se puede ver que el estado en que se encuentra es "Cerrada", lo cual nos indica que esta caja ya no puede ser operada debido a que los movimientos son bloqueados por cada cierre de caja, esto ocurre por diversos motivos, entre ellos, que el usuario decida cerrarla, por lo que los movimientos que se pueden realizar pasan a solo ser observables.

   ![alt text](/docs/img/cc3.png)

   Por otro lado si esta caja resulta estar "Abierta", se permite el ingreso y eliminación de los mismos.

   ![alt text](/docs/img/cc4.png)

   Se pueden ingresar mas movimientos a la caja chica llenando la información requerida.

   Además, si se cuenta con un voucher para poder adjuntarle mas contexto, este permite la entrada de imágenes del documento o archivos PDF.

   ![alt text](/docs/img/cc5.png)

   Finalmente en la tabla se puede ver la información relacionada a este archivo ingresado, esta misma se presenta dentro del sistema para que pueda ser observado.

   ![alt text](/docs/img/cc6.png)

### Mantenimiento Preventivo
  Se le puede dar un mantenimiento preventivo a los activos con los que se cuentan dentro de los almacénes, se pueden crear nuevos registros que declaren la acción que requieren los activos, además de poder suprimirlos.
  
  ![alt text](/docs/img/mp1.png)

  Para poder registrar un nuevo mantenimiento preventivo, solo se necesita llenar la siguiente información dentro del formulario brindado al presionar el botón de "Agregar".

 ![alt text](/docs/img/mp2.png)

### Órdenes de Trabajo 
  Las órdenes de trabajo permiten agregar, editar y eliminar la información referida a las indicaciones dadas hacia los usuarios, estas órdenes sirven para dictaminar labores que se necesitan hacer hacia un activo en concreto, contando además con la información de cuándo y los costos de este etrabajo.
  
  ![alt text](/docs/img/ot1.png)

Al desear agregar una nueva órden de trabajo, esta puede contar todas las facultades disponibles para poder dar detalle y contexto al trabajo requerido y bajo qué conceptos se debe de cumplir.

![alt text](/docs/img/ot2.png)

En el modo edición, la información de la orden de trabajo se amplía, comenzando por el campo de datos generales en el que se pueden editar los valores existentes, a excepción del activo al que esta labor se le hará.

Además de eocnontrarse un apartado que brinda mas detalles a esta orden de trabajo en concreto.

![alt text](/docs/img/ot3.png)

La información de estos detalles brinda mas información acerca de esta orden en concreto, permitiendo además de conocer los registros ya existentes, el poder agregar, eliminar y actualizarlos.

![alt text](/docs/img/ot4.png)

Para agregar o editar los registros, se puede dar uso de este formulario que busca la información necesaria, dándole indicaciones al usuario de lo que hace falta para la creación/actualización.

![alt text](/docs/img/ot5.png)

Finalmente se cuenta con un botón que permite enviar toda esta información de las órdenes de trabajo hacia el correo electrónico asociado al usuario con la sesión activa.

![alt text](/docs/img/ot6.png)

### Rentas 
  Las rentas permiten la transacción de los activos hacia externos, esto se puede hacer en una modalidad en la que el cliente pague mensualmente por su uso, además de que esta misma cuenta con la información necesaria para adjuntar los movimientos efectuados dentro de cada registro nuevo, en las rentas, se puede conocer la información de este único hecho, actualizarlo y entrar en el modo edición que muestra mas información, además de permitir la actuallización de los datos.
  
  Además, cuenta con una funcionalidad que permite notificar a los usuarios que cierta renta está próxima a llegar a su fecha de vencimiento.

  ![alt text](/docs/img/re1.png)
  ![alt text](/docs/img/re1.2.png)

En el modo edición se encuentra la información de tu registro de renta buscado, el cual puede ser modificado a tu disposición, en la parte inferior se puede acceder además a los cobros relacionados con esta renta.

  ![alt text](/docs/img/re2.png)

Los pagos efectuados en tus rentas se pueden encontrar aquí, estos cumpliendo como registro de lo que se ha hecho con esta renta específica, pudiendo así agregar movimientos realizados, modificar sus datos y eliminarlos.

  ![alt text](/docs/img/re3.png)

Estos nuevos movimientos pueden ser registrados en el formulario encargado de crearlos, además de poder editarlos en el mismo.

  ![alt text](/docs/img/re4.png)

### Políticas de Renta 
  Las rentas pueden ser alteradas según las diferentes políticas que puedes ingresar directamente dentro del sistema, para ello solo hace falta acceder dentro del mismo y se encontrará la tabla con todas las reglas que se aplicarán, pudiendo agregar mas para complementar futuras restas, eliminarlas y editar su información.
  
  ![alt text](/docs/img/pr1.png)

  Una vez dentro de la creación o edición de las políticas, la información que se pide es la misma y consta de un formulario simple que requiere del nombre de la política, además de las pautas descritas para las rentas.

   ![alt text](/docs/img/pr2.png)