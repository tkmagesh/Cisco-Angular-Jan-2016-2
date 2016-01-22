'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {







  describe('greet', function(){
      beforeEach(function(){
          browser.get("index.html#/greet")
      });

      it("should display the message when greeted", function(){
            var txtName = element(by.model("name"));
            txtName.sendKeys("Magesh");

            var btnGreet = element(by.buttonText("Greet"));
            btnGreet.click();

            var expectedMessage = 'Hi Magesh, Have a nice day!';
            var divMessage = element(by.binding("message"));
            var actualMessage = divMessage.getText();
            expect(actualMessage).toBe(expectedMessage);
      })
  })
});
