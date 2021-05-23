const { duckIt } = require("node-duckduckgo");
let chai = require('chai');
const expect = require('chai').expect;
chai.should();

describe('Duck Duck Go API',async () => {
  it('Related Topics - Icons - URL', async () => {
      const result = await duckIt('simpsons characters', { format: "json"});
      expect(result.status).to.be.eq(200)
      let relatedTopics=result.data.RelatedTopics;
      for(let i=0;i<relatedTopics.length;i++){
        console.log('https://duckduckgo.com/'+relatedTopics[i].Icon.URL);
      }
  });
it('Name of Characters Comma Separated', async () => {
  const result = await duckIt('simpsons characters', { format: "json"});
  expect(result.status).to.be.eq(200)
  let relatedTopics=result.data.RelatedTopics;
  let names=[];
  for(let i=0;i<relatedTopics.length;i++){
    names.push(relatedTopics[i].FirstURL.split("/")[3].replace(/_/g, " "));
  }
  console.log(names)

});

it('Assert min abstract length ', async () => {
  const result = await duckIt('simpsons characters', { format: "json"});
  expect(result.status).to.be.eq(200)
  let src_options=result.data.meta.src_options;
  expect(Number.isInteger(parseInt(src_options.min_abstract_length))).to.be.true
  expect(src_options.min_abstract_length).to.not.be.null;
});


});
