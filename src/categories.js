




export const CATEGORIES = {
  version : 0,
  cache1 : [],
  titles : {},
  set : {},
  add(cat){
    this.cache1.push(cat);
    this.titles[cat.title.toLowerCase()] = cat.title.toLowerCase();
    this.set[cat.title.toLowerCase()] = cat;
  }
};
