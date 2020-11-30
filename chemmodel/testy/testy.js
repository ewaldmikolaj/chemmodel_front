var MyCustomAtom = Class.create(Kekule.Atom, { // Creating a new class deprived from Kekule.Atom
    CLASS_NAME: 'MyCustomAtom',                  // Explicitly set the name of class
    initialize: function($super, id)             // Method initialize will be regarded as constructor of class
    {
      $super(id);                                // Use $super parameter to call inherited method from ancestor class
      this._customText = 'My value';
    },
    initProperties: function()                   // Special method, defining new properties of class
    {
      this.defineProp('myProperty', {            // defining integer property: myProperty
        'dataType': DataType.INT,
        'getter': function() {
          console.log('Reading myProperty');     // additional operation in property getter
          return this.getPropStoreFieldValue('myProperty');  // return value from default storing field of object
        },
        'setter': function(value)
        {
          console.log('Writing myProperty');     // additional operation in property setter
          this.setPropStoreFieldValue('myProperty', value);  // set value to default storing field of object
        }
      });
      this.defineProp('customText', {            // defining string property: customField
        'dataType': DataType.STRING,
        'getter': function() { return this._customText; },      // return value from a custom storing field
        'setter': function(value) { this._customText = value; } // set value to a custom storing field
      });
    },
    showNewPropertyValues: function()            // defining new method
    {
      console.log(this.getMyProperty(), this.getCustomText());
    }
  });

  var myInstance = new MyCustomAtom('myId');  // create new instance
  myInstance.setMyProperty(10).setCustomText('Custom Text');  // set property values
  myInstance.setSymbol('Cl');   // set property value inherited from ancestor classes
  console.log(myInstance.getAtomicNumber());  // get property value inherited from ancestor classes
  var dupInstance = myInstance.clone();        // access inherited method
  console.log(
  dupInstance.getSymbol(),
  dupInstance.getMyProperty(),
  dupInstance.getCustomText()
);

var mol = new Kekule.Molecule();
// add three atoms to molecule, property setter can be called cascadely
var a1 = (new Kekule.Atom()).setSymbol('C').setCoord3D({'x': -0.4, 'y': 0.23, 'z': 0.5});
var a2 = (new Kekule.Atom()).setSymbol('C').setCoord3D({'x': 0.4, 'y': 0.23, 'z': -0.4});
var a3 = (new Kekule.Atom()).setSymbol('O').setCoord3D({'x': 0, 'y': -0.46, 'z': 0.21});
mol.appendNode(a1);
mol.appendNode(a2);
mol.appendNode(a3);
// add three bonds to molecule
var b1 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a1, a2]);
var b2 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a2, a3]);
var b3 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a3, a1]);
mol.appendConnector(b1);
mol.appendConnector(b2);
mol.appendConnector(b3);

var chemViewer = new Kekule.ChemWidget.Viewer(document);
chemViewer.setDimension('500px', '400px', '200px');
chemViewer.setRenderType(Kekule.Render.RendererType.R3D);
chemViewer.setMoleculeDisplayType(Kekule.Render.Molecule3DDisplayType.SPACE_FILL);
chemViewer.appendToElem(document.getElementById('parent')).setChemObj(mol);