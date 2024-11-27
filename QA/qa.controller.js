const questionAnswers = [
    {
      title: "Question 1:What is the Node.js Event Loop?",
      answer: `
      The Node.js Event Loop is a mechanism that enables non-blocking, asynchronous operations in Node.js, allowing it to handle multiple tasks concurrently despite being single-threaded. 
      It operates in cycles, consisting of phases that process specific types of tasks, such as timers (setTimeout), I/O events, and callbacks from setImmediate.
      Phases: Includes timers, I/O callbacks, poll, check, and close callbacks.
      Task Queue: Handles asynchronous callbacks when ready.
      Microtasks: High-priority tasks like Promise resolutions and process.nextTick run before the next Event Loop phase.
      Non-blocking: Ensures efficient handling of I/O-heavy operations without waiting for blocking tasks to finish.`,
    },
    {
      title: "Question 2:What is the Node.js Event Loop?",
      answer: `It is an open-source JavaScript engine developed by Google, written in C++, and designed for fast and efficient JavaScript execution., plays a crucial role in the execution of JavaScript in Node.js and browsers like Google Chrome
      It is used to create server-side applications and APIs, and is often used in combination with frameworks like Express.js for building web applications.
      V8 is Important in Node.js
      Speed: Converts JavaScript directly into machine code for faster execution.
      Cross-platform: Makes Node.js portable and compatible with multiple operating systems.
      Foundation: Powers modern JavaScript applications by executing code reliably and efficiently.   
      In essence, the V8 Engine is the backbone of JavaScript execution in Node.js, enabling its fast and efficient performance.
      `,
    },
    {
      title:
        "Question 3:What is the Node.js Thread Pool and How to Set the Thread Pool Size?",
      answer: `Thread Pool is part of the libuv library and is used to handle blocking operations like file system tasks, DNS lookups, and cryptographic functions. It ensures the Event Loop remains non-blocking by offloading these tasks to worker threads.
      Default Size: The thread pool has 4 threads by default.
      to Change Size:set UV_THREADPOOL_SIZE=8 && node app.js
      `,
    },
    {
      title:
        "Question 4:What is the Node.js Thread Pool and How to Set the Thread Pool Size?",
      answer: ` is a core component of Node.js that provides the platform's underlying asynchronous I/O capabilities. It is a multi-platform, open-source library written in C, designed to abstract away operating system-specific details, enabling Node.js to perform non-blocking operations consistently across different platforms.
      libuv is Important:
      Makes Node.js asynchronous and non-blocking by design.
      Simplifies cross-platform development by providing a consistent API regardless of the underlying OS.
      Acts as the bridge between JavaScript code and the system-level operations.
      The libuv library is the backbone of Node.js's asynchronous, non-blocking capabilities. It powers the Event Loop, manages threads for blocking tasks, and provides a consistent way to perform I/O and networking operations across different platforms. Without libuv, Node.js's efficient, event-driven architecture would not be possible.
      `,
    },
    {
      title:
        "Question 5:Explain how Node.js handles asynchronous I/O operations.",
      answer: `Node.js handles asynchronous I/O operations using its event-driven, non-blocking architecture, which is powered by the Event Loop, the libuv library, and the thread pool. This approach allows Node.js to efficiently handle multiple I/O operations simultaneously without blocking the main thread.
      Steps in Handling Asynchronous I/O:
      Initiation of I/O Operation:
      When an asynchronous operation (e.g., reading a file, querying a database, or making an HTTP request) is requested, the task is offloaded to the appropriate handler (e.g., libuv, network module).
      Node.js registers a callback function to be executed once the operation is complete.
      Delegation of the Task:
      For non-blocking I/O tasks (e.g., network requests, sockets):
      Node.js uses the OS's underlying asynchronous capabilities through libuv.
      For blocking I/O tasks (e.g., file system operations):
      libuv offloads these tasks to a thread pool to prevent blocking the Event Loop.
      Execution in the Background:
      The I/O operation runs in the background (either by the OS kernel or the thread pool), independent of the main JavaScript thread.
      Event Loop Coordination:
      Once the I/O operation is complete, the Event Loop detects that the task is finished and places the associated callback in the appropriate phase's queue (e.g., timers, I/O callbacks, or setImmediate).
      Callback Execution:
      The callback function is executed on the main thread once the Event Loop reaches the appropriate phase and processes the callback queue.
      `,
    },
  ];
  
  export const questionAnswer = (req, res) => {
    const QN = req.params.questionNumber;
    const questionNumber = parseInt(QN, 10) - 1;
    if (questionNumber >= 0 && questionNumber < questionAnswers.length) {
      return res.status(200).json({
        message: "question found",
        question: questionAnswers[questionNumber],
      });
    } else {
      return res.status(404).json({ message: "question not found" });
    }
  };
  