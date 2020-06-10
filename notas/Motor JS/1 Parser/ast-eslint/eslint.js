exportdefaultfunction (context) {
  return {
    VariableDeclaration(node) {
      //Tipo de variable const
      if (node.kind === "const") {
        const declaration = node.declarations[0];

        //Hay que asegurarnos que el valor es un numero
        if (typeof declaration.init.value === "number") {
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            //Si la variable constante no esta en mayusculas, lanzamos un error
            //Para declarar errores usaremos el argumento context.
            context.report({
              node: declaration.id,
              message: "El nombre de la constante debe estar en Mayusculas",
              //ESLINT tambien nos permite corregir los errores automaticamente
              fix: function (fixer) {
                return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase());
              }
            });
          }
        }
      }
    }
  };
}```