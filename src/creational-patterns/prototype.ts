//Prototype pattern
// 🛡️ Clase Compuesta: Representa el arma del soldado.
class Weapon {
  public name: string;
  public power: number;

  // Constructor de Inicialización
  constructor(name: string, power: number) {
      this.name = name;
      this.power = power;
  }

  // Constructor de Copia (para clonación profunda)
  public clone(): Weapon {
      return new Weapon(this.name, this.power);
  }
}

class Soldier {
  ID: number;
  rank: string;
  equipment: string[];
  primaryWeapon: Weapon; 

  constructor(ID: number, rank: string, equipment: string[], weapon: Weapon);
  constructor(soldier: Soldier);

  constructor(IDOrSoldier: number | Soldier, rank?: string, equipment?: string[], weapon?: Weapon) {
      if (typeof IDOrSoldier === 'number') {
          this.ID = IDOrSoldier;
          this.rank = rank!;
          this.equipment = equipment!;
          this.primaryWeapon = weapon!;
      } else {
          this.ID = IDOrSoldier.ID;
          this.rank = IDOrSoldier.rank;
          //Two examples of deep clone here
          this.equipment = [...IDOrSoldier.equipment]; 
          this.primaryWeapon = IDOrSoldier.primaryWeapon.clone(); 
      }
  }
  
  clone(): Soldier {
      return new Soldier(this as Soldier); // Uso del constructor de copia
  }
}

export class PrototypePattern {
  public static main(): void {
      console.log("--- Inicialización del Prototipo ---");
      // Inicializamos el prototipo con un arma
      const baseWeapon = new Weapon("E-11 Blaster", 5);
      
      // El prototipo original
      let prototype = new Soldier(1, "soldier",["Thermal Detonator"], baseWeapon);

      // 1. Clonar
      const clone1 = prototype.clone() ;
      
      // 2. Modificar el clon
      clone1.ID = 1900;
      clone1.primaryWeapon.power = 8; // 🔥 Modificamos una propiedad del objeto anidado
      clone1.equipment.push("Grappling Hook"); // Modificamos el arreglo

      console.log("--- Verificación de Independencia (Clonación Profunda) ---");
      console.log(`Clon ID: ${clone1.ID} | Weapon Power: ${clone1.primaryWeapon.power} | Equipment: ${clone1.equipment.join(", ")}`);
      console.log(`Original ID: ${prototype.ID} | Weapon Power: ${prototype.primaryWeapon.power} | Equipment: ${prototype.equipment.join(", ")}`);
      // Prueba de Independencia
      console.log("\n¿El objeto 'Weapon' es el mismo en memoria? Debería ser false. Resultado: ", prototype.primaryWeapon === clone1.primaryWeapon);
  }
}