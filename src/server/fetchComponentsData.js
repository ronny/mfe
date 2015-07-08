export default (components) => {
  // return Promise.all(
  //   components
  //     .filter(component => component.fetchData)
  //     .map(component => {
  //       return component.fetchData(redux.dispatch);
  //     })
  // );

  console.warn("TODO: fetch components data for real");
  return Promise.resolve({name: "Foobar"});
};
