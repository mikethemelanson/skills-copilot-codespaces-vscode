function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JS'],
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
}