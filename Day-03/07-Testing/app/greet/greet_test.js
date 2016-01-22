describe("Greet Module", function(){

    beforeEach(module("myApp.greet"));

    describe("greetController", function(){

        it ("Should initialize name with empty string", inject(function($controller){
            var dummyScope = {};
            $controller("greetController", {$scope : dummyScope});

            expect(dummyScope.name).toBe('');
        }));

        it ("Should initialize message with empty string", inject(function($controller){
            var dummyScope = {};
            $controller("greetController", {$scope : dummyScope});

            expect(dummyScope.message).toBe('');
        }));
        it ("Should populate the greet message when greeted", inject(function($controller){
            var dummyScope = {};
            $controller("greetController", {$scope : dummyScope});

            dummyScope.name = 'Magesh';
            dummyScope.greet();
            expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');
        }));
    });
})
