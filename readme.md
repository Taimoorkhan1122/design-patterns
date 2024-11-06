## Learning Desgin Patterns

### Command Pattern

Command Patten decouple different components of a function that performs a task from the function that calls it. 
A dedicated command executor runs the command instead of calling functions manually.
Components:
-   Invoker
-   Receiver 
-   Command Class
-   Concrete Command/s
-   Client

### Invoker
This is responsible for initiating request, the sender does not creates the command, usually it gets the pre-configured command from the client.

### Command
The Command interface interface contains a single method that executes the commands.

### Concrete Command
The CC implements different request that will be performed by the receiver.

### Receiver
This contains some business logic to handle the request passed by the command.

### Client
The client creates and pass the concrete command objects.


