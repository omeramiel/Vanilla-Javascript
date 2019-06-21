
class MemberFactory {
  constructor() {
    this.createMember = function (name, type) {
      let member;
      if (type === 'simple') {
        member = new SimpleMembership(name);
      }
      else if (type === 'standard') {
        member = new StandardMembership(name);
      }
      else if (type === 'super') {
        member = new SuperMembership(name);
      }
      member.type = type;
      member.define = function () {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      };
      return member;
    };
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$5';
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$15';
  }
}

class SuperMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$25';
  }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});