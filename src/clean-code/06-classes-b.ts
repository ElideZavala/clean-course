(() => {
    type Gender = "M" | "F";

    interface PersonProps {
      name     : string;
      gender   : Gender;
      birthDate: Date;
    }

    class Person {
      public birthDate: Date;
      public gender   : Gender;
      public name     : string;

      constructor({ name, gender, birthDate }: PersonProps) {
        this.name      = name;
        this.gender    = gender;
        this.birthDate = birthDate;
      }
    }

    interface UserProps {
      email    : string;
      role     : string;
      name     : string;
      gender   : Gender;
      birthDate: Date;
    }

    class User extends Person {
      public email    : string;
      public role     : string;
      public lastAccess: Date;

      constructor({ 
        email,
        role,
        name,
        gender,
        birthDate, }: UserProps) {
          super({ name, gender, birthDate});
          this.email     = email;
          this.role      = role;
          this.lastAccess = new Date();
      }
    }

    interface UserSettingsProps {
      email           : string;
      role            : string;
      name            : string;
      gender          : Gender;
      birthDate       : Date;
      workingDirectory: string;
      lastOpenFolder  : string;
    }

    class UserSettings extends User {
      public workingDirectory : string;
      public lastOpenFolder  : string;

      constructor({
        email,
        role,
        name,
        gender,
        birthDate,
        workingDirectory,
        lastOpenFolder, 
      }: UserSettingsProps ) {
          super ({ 
            birthDate, 
            email, 
            gender, 
            name, 
            role
          })
           this.workingDirectory = workingDirectory;
          this.lastOpenFolder = lastOpenFolder;
      }
    }

    const userSettings = new UserSettings({
      birthDate: new Date('1992-12-09'),
      email: 'zavala@gmail.com',
      gender: 'M',
      lastOpenFolder: 'C:\\Users\\zavala\\Documents',
      name: 'Elide',
      role: 'admin',
      workingDirectory: 'C:\\Users\\zavala\\Documents',
    });

    console.log({ userSettings });
})();