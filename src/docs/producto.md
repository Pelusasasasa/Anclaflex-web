# Documentacion de Producto

###Producto:
id: Clave identificadora.
descripcion: Descripcion del producto.
stock: cantindad de stock del producto.
caracteristas: Lista de las caracteristicas del producto.
color: Color del producto.
costo: costo del producto.
costoDolar: Costo del producto en dolares.
iva: Iva del producto.
precio: Precio del producto.
oferta: booleano de si esta en oferta o no
precioOferta: precio de oferta
img: url de la imagen.
destacado: booleano de s aparece como destacado

- **Crear Producto**: La crecion de los productos se va a dar con los usuarios del tipo administrador y empleado, pero solamente el administrador va mpoder ver costo, utilidad, iva, y precio de oferta, los demas si lo van a poder hacer todo
- **Eliminacion**: La eliminacion de los productos solamente va a poder ser por parte de los usuarios administradores
- **Modificacion**: EL usuario empleado modificar todo menos lo que no puede ver y el administracion control total
- **Filtrar**: La filtracion se hace desde cualquier parte
- **Filtrar por id**: Se va usar para modifcar un producto entonces solamente usuarios empleado o administrador
