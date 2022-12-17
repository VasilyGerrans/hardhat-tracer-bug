This repository is a demonstration of a bug in the current version of `hardhat-tracer` (`1.2.0`).

The error should be possible to reproduce by running `npm i && npx hardhat test` in this repository.

Here is an example of what the error looks like on macOS Monterey 12.3:

```
<--- Last few GCs --->

[59755:0x7fd1df100000]    41562 ms: Mark-sweep 4045.5 (4132.6) -> 4037.6 (4142.6) MB, 2019.7 / 0.1 ms  (average mu = 0.684, current mu = 0.135) allocation failure scavenge might not succeed
[59755:0x7fd1df100000]    45385 ms: Mark-sweep 4053.8 (4142.6) -> 4046.1 (4149.6) MB, 3793.3 / 0.1 ms  (average mu = 0.380, current mu = 0.008) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10728a775 node::Abort() [/usr/local/bin/node]
 2: 0x10728a8f8 node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
 3: 0x107402707 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 4: 0x1074026a3 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 5: 0x1075a10e5 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
 6: 0x10759f94c v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
 7: 0x1075ac2c0 v8::internal::Heap::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
 8: 0x1075ac341 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/bin/node]
 9: 0x1075791b7 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/usr/local/bin/node]
10: 0x1079272ae v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/usr/local/bin/node]
11: 0x107cc9359 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
zsh: abort      npx hardhat test
```

The error seems to be indicative of a memory leak. 

This type of error appears on any sufficiently long trace.
