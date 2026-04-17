import { getMedicines } from "./medicine";
2
1
import { useEffect, useState } from "react";
3
2
import {
4
3
  Dialog,
5
4
  DialogContent,
6
5
  DialogHeader,
7
6
  DialogTitle,
8
7
} from "@/components/ui/dialog";
9
8
import { Input } from "@/components/ui/input";
10
9
import { Label } from "@/components/ui/label";
11
10
import {
12
11
  Activity,
13
12
  ArrowRight,
14
13
  Bell,
15
14
  CalendarDays,
16
15
  CheckCircle,
17
16
  ChevronRight,
18
17
  Clock,
19
18
  Edit2,
20
19
  Heart,
21
20
  History,
22
21
  Home,
23
22
  LogIn,
24
23
  Moon,
25
24
  Pill,
26
25
  Plus,
27
26
  Shield,
28
27
  Star,
29
28
  TrendingUp,
30
29
  User,
31
30
  X,
32
31
} from "lucide-react";
33
32
import { AnimatePresence, motion } from "motion/react";
34
import { useState } from "react";
35
33
34
36
35
type Screen = "splash" | "login" | "signup" | "home" | "history" | "profile";
37
36
type NavTab = "home" | "add" | "history" | "profile";
38
37
38
interface Medicine {
39
  name: string;
40
  time: string;
41
  status: "taken" | "pending" | "missed";
42
  dosage?: string;
43
}
44
45
const getMedicines = async (): Promise<Medicine[]> => {
46
  return [
47
    { name: "Paracetamol", time: "10:00 AM", status: "pending", dosage: "500mg" },
48
  ];
49
};
50
39
51
const weekData = [
40
52
  { day: "Mon", status: "taken" },
41
53
  { day: "Tue", status: "taken" },
42
54
  { day: "Wed", status: "missed" },
43
55
  { day: "Thu", status: "taken" },
44
56
  { day: "Fri", status: "taken" },
45
57
  { day: "Sat", status: "taken" },
46
58
  { day: "Sun", status: "pending" },
47
59
];
48
60
49
61
const historyData = [
50
62
  {
51
63
    date: "Mar 13",
52
64
    day: "Yesterday",
53
65
    medicines: [
54
66
      { name: "Paracetamol", time: "10:00 AM", status: "taken" },
55
67
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
56
68
    ],
57
69
  },
58
70
  {
59
71
    date: "Mar 12",
60
72
    day: "Wednesday",
61
73
    medicines: [
62
74
      { name: "Paracetamol", time: "10:00 AM", status: "missed" },
63
75
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
64
76
    ],
65
77
  },
66
78
  {
67
79
    date: "Mar 11",
68
80
    day: "Tuesday",
69
81
    medicines: [
70
82
      { name: "Paracetamol", time: "10:00 AM", status: "taken" },
71
83
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
72
84
    ],
73
85
  },
74
86
  {
75
87
    date: "Mar 10",
76
88
    day: "Monday",
77
89
    medicines: [{ name: "Paracetamol", time: "10:00 AM", status: "taken" }],
78
90
  },
79
91
];
80
92
81
93
function SplashScreen({ onNext }: { onNext: () => void }) {
82
94
  return (
83
95
    <motion.div
84
96
      key="splash"
85
97
      initial={{ opacity: 0 }}
86
98
      animate={{ opacity: 1 }}
87
99
      exit={{ opacity: 0, scale: 0.95 }}
88
100
      transition={{ duration: 0.4 }}
89
101
      className="flex flex-col items-center justify-between h-full px-8 pt-16 pb-12"
90
102
      style={{ background: "oklch(var(--primary))" }}
91
103
    >
92
104
      <div />
93
105
      <div className="flex flex-col items-center gap-6">
94
106
        <motion.div
95
107
          initial={{ scale: 0 }}
96
108
          animate={{ scale: 1 }}
97
109
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
98
110
          className="w-28 h-28 rounded-[36px] bg-white flex items-center justify-center shadow-2xl"
99
111
        >
100
112
          <Pill
101
113
            size={56}
102
114
            style={{ color: "oklch(var(--primary))" }}
103
115
            strokeWidth={1.8}
104
116
          />
105
117
        </motion.div>
106
118
        <motion.div
107
119
          initial={{ opacity: 0, y: 20 }}
108
120
          animate={{ opacity: 1, y: 0 }}
109
121
          transition={{ delay: 0.4 }}
110
122
          className="text-center"
111
123
        >
112
124
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
113
125
            MediReminder
114
126
          </h1>
115
127
          <p className="text-white/70 text-base mt-2 font-medium">
116
128
            Never miss a dose again
117
129
          </p>
118
130
        </motion.div>
119
131
      </div>
120
132
121
133
      <motion.div
122
134
        initial={{ opacity: 0, y: 20 }}
123
135
        animate={{ opacity: 1, y: 0 }}
124
136
        transition={{ delay: 0.6 }}
125
137
        className="w-full flex flex-col gap-3"
126
138
      >
127
139
        <div className="flex justify-center gap-6 mb-4">
128
140
          {[
129
141
            { icon: Shield, label: "Safe" },
130
142
            { icon: Bell, label: "Reminders" },
131
143
            { icon: Heart, label: "Healthy" },
132
144
          ].map(({ icon: Icon, label }) => (
133
145
            <div key={label} className="flex flex-col items-center gap-1">
134
146
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
135
147
                <Icon size={22} color="white" />
136
148
              </div>
137
149
              <span className="text-white/80 text-xs font-semibold">
138
150
                {label}
139
151
              </span>
140
152
            </div>
141
153
          ))}
142
154
        </div>
143
155
        <motion.button
144
156
          data-ocid="splash.primary_button"
145
157
          whileTap={{ scale: 0.97 }}
146
158
          onClick={onNext}
147
159
          className="w-full py-4 rounded-3xl font-bold text-lg flex items-center justify-center gap-2"
148
160
          style={{ background: "white", color: "oklch(var(--primary))" }}
149
161
        >
150
162
          Get Started <ArrowRight size={20} />
151
163
        </motion.button>
152
164
      </motion.div>
153
165
    </motion.div>
154
166
  );
155
167
}
156
168
157
169
function LoginScreen({
158
170
  onLogin,
159
171
  onSignup,
160
172
}: { onLogin: () => void; onSignup: () => void }) {
161
173
  const [email, setEmail] = useState("");
162
174
  const [password, setPassword] = useState("");
163
175
164
176
  return (
165
177
    <motion.div
166
178
      key="login"
167
179
      initial={{ opacity: 0, x: 40 }}
168
180
      animate={{ opacity: 1, x: 0 }}
169
181
      exit={{ opacity: 0, x: -40 }}
170
182
      transition={{ duration: 0.35 }}
171
183
      className="flex flex-col h-full"
172
184
    >
173
185
      {/* Top wave */}
174
186
      <div
175
187
        className="relative h-44 flex-shrink-0"
176
188
        style={{ background: "oklch(var(--primary))" }}
177
189
      >
178
190
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[32px]" />
179
191
        <div className="flex flex-col items-center justify-center h-full pb-8">
180
192
          <div className="w-16 h-16 rounded-[22px] bg-white flex items-center justify-center shadow-lg">
181
193
            <Pill
182
194
              size={32}
183
195
              style={{ color: "oklch(var(--primary))" }}
184
196
              strokeWidth={2}
185
197
            />
186
198
          </div>
187
199
          <h2 className="text-white text-2xl font-extrabold mt-3">
188
200
            Welcome back
189
201
          </h2>
190
202
          <p className="text-white/70 text-sm font-medium">
191
203
            Sign in to continue
192
204
          </p>
193
205
        </div>
194
206
      </div>
195
207
196
208
      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-8 bg-background">
197
209
        <div className="flex flex-col gap-4">
198
210
          <div className="flex flex-col gap-1.5">
199
211
            <Label
200
212
              htmlFor="login-email"
201
213
              className="text-sm font-semibold"
202
214
              style={{ color: "#1A1A1A" }}
203
215
            >
204
216
              Email
205
217
            </Label>
206
218
            <Input
207
219
              id="login-email"
208
220
              data-ocid="login.input"
209
221
              type="email"
210
222
              placeholder="you@example.com"
211
223
              value={email}
212
224
              onChange={(e) => setEmail(e.target.value)}
213
225
              className="h-12 text-base rounded-2xl"
214
226
            />
215
227
          </div>
216
228
          <div className="flex flex-col gap-1.5">
217
229
            <Label
218
230
              htmlFor="login-pass"
219
231
              className="text-sm font-semibold"
220
232
              style={{ color: "#1A1A1A" }}
221
233
            >
222
234
              Password
223
235
            </Label>
224
236
            <Input
225
237
              id="login-pass"
226
238
              data-ocid="login.input"
227
239
              type="password"
228
240
              placeholder="••••••••"
229
241
              value={password}
230
242
              onChange={(e) => setPassword(e.target.value)}
231
243
              className="h-12 text-base rounded-2xl"
232
244
            />
233
245
          </div>
234
246
          <div className="flex justify-end">
235
247
            <button
236
248
              type="button"
237
249
              className="text-sm font-semibold"
238
250
              style={{ color: "oklch(var(--primary))" }}
239
251
            >
240
252
              Forgot Password?
241
253
            </button>
242
254
          </div>
243
255
          <motion.button
244
256
            data-ocid="login.submit_button"
245
257
            whileTap={{ scale: 0.97 }}
246
258
            onClick={onLogin}
247
259
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 mt-1"
248
260
            style={{
249
261
              background: "oklch(var(--primary))",
250
262
              boxShadow: "0 4px 20px rgba(47,128,237,0.35)",
251
263
            }}
252
264
          >
253
265
            <LogIn size={20} /> Sign In
254
266
          </motion.button>
255
267
256
268
          <div className="flex items-center gap-3 my-1">
257
269
            <div
258
270
              className="flex-1 h-px"
259
271
              style={{ background: "oklch(var(--border))" }}
260
272
            />
261
273
            <span
262
274
              className="text-xs font-medium"
263
275
              style={{ color: "oklch(var(--muted-foreground))" }}
264
276
            >
265
277
              or
266
278
            </span>
267
279
            <div
268
280
              className="flex-1 h-px"
269
281
              style={{ background: "oklch(var(--border))" }}
270
282
            />
271
283
          </div>
272
284
273
285
          <button
274
286
            type="button"
275
287
            data-ocid="login.secondary_button"
276
288
            onClick={onSignup}
277
289
            className="w-full py-4 rounded-2xl font-bold text-base border-2 transition-colors"
278
290
            style={{
279
291
              borderColor: "oklch(var(--primary))",
280
292
              color: "oklch(var(--primary))",
281
293
            }}
282
294
          >
283
295
            Create Account
284
296
          </button>
285
297
286
298
          <p
287
299
            className="text-center text-xs mt-2"
288
300
            style={{ color: "oklch(var(--muted-foreground))" }}
289
301
          >
290
302
            Demo: tap Sign In to continue
291
303
          </p>
292
304
        </div>
293
305
      </div>
294
306
    </motion.div>
295
307
  );
296
308
}
297
309
298
310
function SignupScreen({
299
311
  onSignup,
300
312
  onBack,
301
313
}: { onSignup: () => void; onBack: () => void }) {
302
314
  const [name, setName] = useState("");
303
315
  const [email, setEmail] = useState("");
304
316
  const [password, setPassword] = useState("");
305
317
  const [age, setAge] = useState("");
306
318
307
319
  return (
308
320
    <motion.div
309
321
      key="signup"
310
322
      initial={{ opacity: 0, x: 40 }}
311
323
      animate={{ opacity: 1, x: 0 }}
312
324
      exit={{ opacity: 0, x: -40 }}
313
325
      transition={{ duration: 0.35 }}
314
326
      className="flex flex-col h-full"
315
327
    >
316
328
      <div
317
329
        className="relative h-40 flex-shrink-0"
318
330
        style={{ background: "oklch(var(--primary))" }}
319
331
      >
320
332
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[32px]" />
321
333
        <div className="flex items-center px-6 pt-12 pb-4">
322
334
          <button
323
335
            type="button"
324
336
            onClick={onBack}
325
337
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mr-3"
326
338
          >
327
339
            <X size={18} color="white" />
328
340
          </button>
329
341
          <div>
330
342
            <h2 className="text-white text-2xl font-extrabold">
331
343
              Create Account
332
344
            </h2>
333
345
            <p className="text-white/70 text-sm">Join MediReminder today</p>
334
346
          </div>
335
347
        </div>
336
348
      </div>
337
349
338
350
      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-8 bg-background">
339
351
        <div className="flex flex-col gap-4">
340
352
          {[
341
353
            {
342
354
              id: "su-name",
343
355
              label: "Full Name",
344
356
              ph: "Atharva",
345
357
              val: name,
346
358
              set: setName,
347
359
              type: "text",
348
360
            },
349
361
            {
350
362
              id: "su-email",
351
363
              label: "Email",
352
364
              ph: "you@example.com",
353
365
              val: email,
354
366
              set: setEmail,
355
367
              type: "email",
356
368
            },
357
369
            {
358
370
              id: "su-age",
359
371
              label: "Age",
360
372
              ph: "e.g. 65",
361
373
              val: age,
362
374
              set: setAge,
363
375
              type: "number",
364
376
            },
365
377
            {
366
378
              id: "su-pass",
367
379
              label: "Password",
368
380
              ph: "••••••••",
369
381
              val: password,
370
382
              set: setPassword,
371
383
              type: "password",
372
384
            },
373
385
          ].map(({ id, label, ph, val, set, type }) => (
374
386
            <div key={id} className="flex flex-col gap-1.5">
375
387
              <Label
376
388
                htmlFor={id}
377
389
                className="text-sm font-semibold"
378
390
                style={{ color: "#1A1A1A" }}
379
391
              >
380
392
                {label}
381
393
              </Label>
382
394
              <Input
383
395
                id={id}
384
396
                data-ocid="signup.input"
385
397
                type={type}
386
398
                placeholder={ph}
387
399
                value={val}
388
400
                onChange={(e) => set(e.target.value)}
389
401
                className="h-12 text-base rounded-2xl"
390
402
              />
391
403
            </div>
392
404
          ))}
393
405
394
406
          <motion.button
395
407
            data-ocid="signup.submit_button"
396
408
            whileTap={{ scale: 0.97 }}
397
409
            onClick={onSignup}
398
410
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 mt-1"
399
411
            style={{
400
412
              background: "oklch(var(--primary))",
401
413
              boxShadow: "0 4px 20px rgba(47,128,237,0.35)",
402
414
            }}
403
415
          >
404
416
            <CheckCircle size={20} /> Create Account
405
417
          </motion.button>
406
418
407
419
          <button
408
420
            type="button"
409
421
            onClick={onBack}
410
422
            className="text-center text-sm font-semibold"
411
423
            style={{ color: "oklch(var(--primary))" }}
412
424
          >
413
425
            Already have an account? Sign In
414
426
          </button>
415
427
        </div>
416
428
      </div>
417
429
    </motion.div>
418
430
  );
419
431
}
420
432
421
433
function HomeScreen({
422
434
  isTaken,
423
435
  medicines,
424
436
  onMarkTaken,
425
437
  onAddMedicine,
426
438
}: {
427
439
  isTaken: boolean;
428
  medicines: any[];
440
  medicines: Medicine[];
429
441
  onMarkTaken: () => void;
430
442
  onAddMedicine: () => void;
431
443
}) {
432
444
  return (
433
445
    <motion.div
434
446
      key="home"
435
447
      initial={{ opacity: 0 }}
436
448
      animate={{ opacity: 1 }}
437
449
      exit={{ opacity: 0 }}
438
450
      transition={{ duration: 0.3 }}
439
451
      className="flex flex-col h-full overflow-y-auto pb-28"
440
452
    >
441
453
      {/* Header */}
442
454
      <motion.header
443
455
        initial={{ opacity: 0, y: -16 }}
444
456
        animate={{ opacity: 1, y: 0 }}
445
457
        transition={{ duration: 0.45 }}
446
458
        className="px-6 pt-4 pb-4"
447
459
      >
448
460
        <div className="flex items-center justify-between mb-4">
449
461
          <div className="flex items-center gap-2">
450
462
            <div
451
463
              className="w-9 h-9 rounded-2xl flex items-center justify-center"
452
464
              style={{ background: "oklch(var(--primary))" }}
453
465
            >
454
466
              <Pill size={18} color="white" strokeWidth={2.5} />
455
467
            </div>
456
468
            <span
457
469
              className="text-2xl font-extrabold tracking-tight"
458
470
              style={{ color: "oklch(var(--primary))" }}
459
471
            >
460
472
              MediReminder
461
473
            </span>
462
474
          </div>
463
475
          <div
464
476
            className="w-10 h-10 rounded-2xl flex items-center justify-center relative"
465
477
            style={{ background: "oklch(var(--secondary))" }}
466
478
          >
467
479
            <Bell size={18} style={{ color: "oklch(var(--primary))" }} />
468
480
            <span
469
481
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
470
482
              style={{ background: "oklch(var(--primary))" }}
471
483
            >
472
484
              1
473
485
            </span>
474
486
          </div>
475
487
        </div>
476
488
        <h1 className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
477
489
          Good Morning, Atharva 👋
478
490
        </h1>
479
491
        <div className="flex items-center gap-1.5 mt-1">
480
492
          <CalendarDays
481
493
            size={14}
482
494
            style={{ color: "oklch(var(--muted-foreground))" }}
483
495
          />
484
496
          <p
485
497
            className="text-sm font-medium"
486
498
            style={{ color: "oklch(var(--muted-foreground))" }}
487
499
          >
488
500
            You have 1 reminder today
489
501
          </p>
490
502
        </div>
491
503
      </motion.header>
492
504
493
505
      <div className="px-5 flex flex-col gap-4">
494
506
        {/* Today's Medicine Card */}
495
507
        <motion.div
496
508
          initial={{ opacity: 0, y: 20 }}
497
509
          animate={{ opacity: 1, y: 0 }}
498
510
          transition={{ delay: 0.1 }}
499
511
          className="rounded-3xl bg-white p-5 card-shadow"
500
512
        >
501
513
          <div className="flex items-center justify-between mb-4">
502
514
            <h2 className="text-lg font-bold" style={{ color: "#1A1A1A" }}>
503
515
              Today's Medicine
504
516
            </h2>
505
517
            <AnimatePresence mode="wait">
506
518
              {isTaken ? (
507
519
                <motion.span
508
520
                  key="taken"
509
521
                  initial={{ scale: 0.8, opacity: 0 }}
510
522
                  animate={{ scale: 1, opacity: 1 }}
511
523
                  exit={{ scale: 0.8, opacity: 0 }}
512
524
                  className="px-3 py-1 rounded-full text-xs font-bold"
513
525
                  style={{
514
526
                    background: "oklch(0.92 0.08 145)",
515
527
                    color: "oklch(0.45 0.17 145)",
516
528
                  }}
517
529
                >
518
530
                  ✓ Taken
519
531
                </motion.span>
520
532
              ) : (
521
533
                <motion.span
522
534
                  key="pending"
523
535
                  initial={{ scale: 0.8, opacity: 0 }}
524
536
                  animate={{ scale: 1, opacity: 1 }}
525
537
                  exit={{ scale: 0.8, opacity: 0 }}
526
538
                  className="px-3 py-1 rounded-full text-xs font-bold"
527
539
                  style={{
528
540
                    background: "oklch(0.96 0.1 80)",
529
541
                    color: "oklch(0.58 0.18 68)",
530
542
                  }}
531
543
                >
532
544
                  ⏰ Pending
533
545
                </motion.span>
534
546
              )}
535
547
            </AnimatePresence>
536
548
          </div>
537
549
          <div
538
550
            className="rounded-2xl p-4 mb-4"
539
551
            style={{ background: "oklch(var(--secondary))" }}
540
552
          >
541
553
            <div className="flex items-center gap-3 mb-2">
542
554
              <div
543
555
                className="w-10 h-10 rounded-xl flex items-center justify-center"
544
556
                style={{ background: "oklch(var(--primary))" }}
545
557
              >
546
558
                <Pill size={20} color="white" strokeWidth={2} />
547
559
              </div>
548
560
              <div>
549
              {medicines.length > 0 ? (
550
  <>
551
    <p className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
552
      {medicines[0].name}
553
    </p>
561
                {medicines.length > 0 ? (
562
                  <>
563
                    <p className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
564
                      {medicines[0].name}
565
                    </p>
554
566
555
    <p
556
      className="text-xs font-medium"
557
      style={{ color: "oklch(var(--muted-foreground))" }}
558
    >
559
      Status: {medicines[0].status}
560
    </p>
567
                    <p
568
                      className="text-xs font-medium"
569
                      style={{ color: "oklch(var(--muted-foreground))" }}
570
                    >
571
                      Status: {medicines[0].status}
572
                    </p>
561
573
562
    <div className="flex items-center gap-2">
563
      <Clock size={15} style={{ color: "oklch(var(--primary))" }} />
564
      <span
565
        className="text-base font-semibold"
566
        style={{ color: "oklch(var(--primary))" }}
567
      >
568
        {medicines[0].time}
569
      </span>
570
    </div>
571
  </>
572
) : (
573
  <p>No medicine added</p>
574
)}
574
                    <div className="flex items-center gap-2">
575
                      <Clock size={15} style={{ color: "oklch(var(--primary))" }} />
576
                      <span
577
                        className="text-base font-semibold"
578
                        style={{ color: "oklch(var(--primary))" }}
579
                      >
580
                        {medicines[0].time}
581
                      </span>
582
                    </div>
583
                  </>
584
                ) : (
585
                  <p>No medicine added</p>
586
                )}
587
              </div>
575
588
            </div>
576
          </div>
577
          <motion.button
578
            data-ocid="reminder.primary_button"
579
            onClick={onMarkTaken}
580
            disabled={isTaken}
581
            whileTap={{ scale: isTaken ? 1 : 0.97 }}
582
            className="w-full py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2.5 transition-all duration-300"
583
            style={{
584
              background: isTaken
585
                ? "oklch(0.6 0.18 145)"
586
                : "oklch(var(--primary))",
587
              color: "white",
588
              boxShadow: isTaken
589
                ? "0 4px 16px rgba(34,197,94,0.3)"
590
                : "0 4px 20px rgba(47,128,237,0.35)",
591
              cursor: isTaken ? "default" : "pointer",
592
            }}
593
          >
594
            <CheckCircle size={22} strokeWidth={2.5} />
595
            {isTaken ? "Medicine Taken!" : "Mark as Taken"}
596
          </motion.button>
589
            <motion.button
590
              data-ocid="reminder.primary_button"
591
              onClick={onMarkTaken}
592
              disabled={isTaken}
593
              whileTap={{ scale: isTaken ? 1 : 0.97 }}
594
              className="w-full py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2.5 transition-all duration-300"
595
              style={{
596
                background: isTaken
597
                  ? "oklch(0.6 0.18 145)"
598
                  : "oklch(var(--primary))",
599
                color: "white",
600
                boxShadow: isTaken
601
                  ? "0 4px 16px rgba(34,197,94,0.3)"
602
                  : "0 4px 20px rgba(47,128,237,0.35)",
603
                cursor: isTaken ? "default" : "pointer",
604
              }}
605
            >
606
              <CheckCircle size={22} strokeWidth={2.5} />
607
              {isTaken ? "Medicine Taken!" : "Mark as Taken"}
608
            </motion.button>
597
609
        </motion.div>
598
610
599
611
        {/* Upcoming Reminder */}
⋯ Expand 430 more lines
1030
1042
  const [isModalOpen, setIsModalOpen] = useState(false);
1031
1043
  const [medicineName, setMedicineName] = useState("");
1032
1044
  const [medicineTime, setMedicineTime] = useState("10:00");
1033
  const [medicines, setMedicines] = useState<any[]>([]);
1034
  
1045
  const [medicines, setMedicines] = useState<Medicine[]>([]);
1046
1035
1047
  useEffect(() => {
1036
  async function loadData() {
1037
    const data = await getMedicines();
1038
    setMedicines(data);
1039
  }
1040
  loadData();
1041
}, []);
1048
    async function loadData() {
1049
      const data = await getMedicines();
1050
      setMedicines(data);
1051
    }
1052
    loadData();
1053
  }, []);
1042
1054
1043
1055
  const isAppScreen =
1044
1056
    screen === "home" || screen === "history" || screen === "profile";
⋯ Expand 8 more lines
1053
1065
  };
1054
1066
1055
1067
  const handleSaveMedicine = () => {
1056
    setIsModalOpen(false);
1057
    setMedicineName("");
1058
    setMedicineTime("10:00");
1068
    if (medicineName.trim()) {
1069
      const newMed: Medicine = {
1070
        name: medicineName,
1071
        time: medicineTime,
1072
        status: "pending",
1073
      };
1074
      setMedicines([...medicines, newMed]);
1075
      setIsModalOpen(false);
1076
      setMedicineName("");
1077
      setMedicineTime("10:00");
1078
    }
1059
1079
  };
1060
1080
1061
1081
  return (
⋯ Expand 83 more lines
1145
1165
              <HomeScreen
1146
1166
                key="home"
1147
1167
                isTaken={isTaken}
1168
                medicines={medicines}
1148
1169
                onMarkTaken={() => setIsTaken(true)}
1149
1170
                onAddMedicine={() => setIsModalOpen(true)}
1150
1171
              />
⋯ Expand 144 more lines
1295
1316
    </div>
1296
1317
  );
1297
1318
}
