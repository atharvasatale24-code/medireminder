import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Activity,
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  Edit2,
  Heart,
  History,
  Home,
  LogIn,
  Moon,
  Pill,
  Plus,
  Shield,
  Star,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Screen = "splash" | "login" | "signup" | "home" | "history" | "profile";
type NavTab = "home" | "add" | "history" | "profile";

const weekData = [
  { day: "Mon", status: "taken" },
  { day: "Tue", status: "taken" },
  { day: "Wed", status: "missed" },
  { day: "Thu", status: "taken" },
  { day: "Fri", status: "taken" },
  { day: "Sat", status: "taken" },
  { day: "Sun", status: "pending" },
];

const historyData = [
  {
    date: "Mar 13",
    day: "Yesterday",
    medicines: [
      { name: "Paracetamol", time: "10:00 AM", status: "taken" },
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
    ],
  },
  {
    date: "Mar 12",
    day: "Wednesday",
    medicines: [
      { name: "Paracetamol", time: "10:00 AM", status: "missed" },
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
    ],
  },
  {
    date: "Mar 11",
    day: "Tuesday",
    medicines: [
      { name: "Paracetamol", time: "10:00 AM", status: "taken" },
      { name: "Vitamin D", time: "8:00 PM", status: "taken" },
    ],
  },
  {
    date: "Mar 10",
    day: "Monday",
    medicines: [{ name: "Paracetamol", time: "10:00 AM", status: "taken" }],
  },
];

function SplashScreen({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-between h-full px-8 pt-16 pb-12"
      style={{ background: "oklch(var(--primary))" }}
    >
      <div />
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-28 h-28 rounded-[36px] bg-white flex items-center justify-center shadow-2xl"
        >
          <Pill
            size={56}
            style={{ color: "oklch(var(--primary))" }}
            strokeWidth={1.8}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            MediReminder
          </h1>
          <p className="text-white/70 text-base mt-2 font-medium">
            Never miss a dose again
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full flex flex-col gap-3"
      >
        <div className="flex justify-center gap-6 mb-4">
          {[
            { icon: Shield, label: "Safe" },
            { icon: Bell, label: "Reminders" },
            { icon: Heart, label: "Healthy" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Icon size={22} color="white" />
              </div>
              <span className="text-white/80 text-xs font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>
        <motion.button
          data-ocid="splash.primary_button"
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full py-4 rounded-3xl font-bold text-lg flex items-center justify-center gap-2"
          style={{ background: "white", color: "oklch(var(--primary))" }}
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function LoginScreen({
  onLogin,
  onSignup,
}: { onLogin: () => void; onSignup: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col h-full"
    >
      {/* Top wave */}
      <div
        className="relative h-44 flex-shrink-0"
        style={{ background: "oklch(var(--primary))" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[32px]" />
        <div className="flex flex-col items-center justify-center h-full pb-8">
          <div className="w-16 h-16 rounded-[22px] bg-white flex items-center justify-center shadow-lg">
            <Pill
              size={32}
              style={{ color: "oklch(var(--primary))" }}
              strokeWidth={2}
            />
          </div>
          <h2 className="text-white text-2xl font-extrabold mt-3">
            Welcome back
          </h2>
          <p className="text-white/70 text-sm font-medium">
            Sign in to continue
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-8 bg-background">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="login-email"
              className="text-sm font-semibold"
              style={{ color: "#1A1A1A" }}
            >
              Email
            </Label>
            <Input
              id="login-email"
              data-ocid="login.input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="login-pass"
              className="text-sm font-semibold"
              style={{ color: "#1A1A1A" }}
            >
              Password
            </Label>
            <Input
              id="login-pass"
              data-ocid="login.input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-base rounded-2xl"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-semibold"
              style={{ color: "oklch(var(--primary))" }}
            >
              Forgot Password?
            </button>
          </div>
          <motion.button
            data-ocid="login.submit_button"
            whileTap={{ scale: 0.97 }}
            onClick={onLogin}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 mt-1"
            style={{
              background: "oklch(var(--primary))",
              boxShadow: "0 4px 20px rgba(47,128,237,0.35)",
            }}
          >
            <LogIn size={20} /> Sign In
          </motion.button>

          <div className="flex items-center gap-3 my-1">
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(var(--border))" }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "oklch(var(--border))" }}
            />
          </div>

          <button
            type="button"
            data-ocid="login.secondary_button"
            onClick={onSignup}
            className="w-full py-4 rounded-2xl font-bold text-base border-2 transition-colors"
            style={{
              borderColor: "oklch(var(--primary))",
              color: "oklch(var(--primary))",
            }}
          >
            Create Account
          </button>

          <p
            className="text-center text-xs mt-2"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            Demo: tap Sign In to continue
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SignupScreen({
  onSignup,
  onBack,
}: { onSignup: () => void; onBack: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  return (
    <motion.div
      key="signup"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col h-full"
    >
      <div
        className="relative h-40 flex-shrink-0"
        style={{ background: "oklch(var(--primary))" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[32px]" />
        <div className="flex items-center px-6 pt-12 pb-4">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mr-3"
          >
            <X size={18} color="white" />
          </button>
          <div>
            <h2 className="text-white text-2xl font-extrabold">
              Create Account
            </h2>
            <p className="text-white/70 text-sm">Join MediReminder today</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-8 bg-background">
        <div className="flex flex-col gap-4">
          {[
            {
              id: "su-name",
              label: "Full Name",
              ph: "Atharva",
              val: name,
              set: setName,
              type: "text",
            },
            {
              id: "su-email",
              label: "Email",
              ph: "you@example.com",
              val: email,
              set: setEmail,
              type: "email",
            },
            {
              id: "su-age",
              label: "Age",
              ph: "e.g. 65",
              val: age,
              set: setAge,
              type: "number",
            },
            {
              id: "su-pass",
              label: "Password",
              ph: "••••••••",
              val: password,
              set: setPassword,
              type: "password",
            },
          ].map(({ id, label, ph, val, set, type }) => (
            <div key={id} className="flex flex-col gap-1.5">
              <Label
                htmlFor={id}
                className="text-sm font-semibold"
                style={{ color: "#1A1A1A" }}
              >
                {label}
              </Label>
              <Input
                id={id}
                data-ocid="signup.input"
                type={type}
                placeholder={ph}
                value={val}
                onChange={(e) => set(e.target.value)}
                className="h-12 text-base rounded-2xl"
              />
            </div>
          ))}

          <motion.button
            data-ocid="signup.submit_button"
            whileTap={{ scale: 0.97 }}
            onClick={onSignup}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 mt-1"
            style={{
              background: "oklch(var(--primary))",
              boxShadow: "0 4px 20px rgba(47,128,237,0.35)",
            }}
          >
            <CheckCircle size={20} /> Create Account
          </motion.button>

          <button
            type="button"
            onClick={onBack}
            className="text-center text-sm font-semibold"
            style={{ color: "oklch(var(--primary))" }}
          >
            Already have an account? Sign In
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function HomeScreen({
  isTaken,
  onMarkTaken,
  onAddMedicine,
}: { isTaken: boolean; onMarkTaken: () => void; onAddMedicine: () => void }) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto pb-28"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="px-6 pt-4 pb-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "oklch(var(--primary))" }}
            >
              <Pill size={18} color="white" strokeWidth={2.5} />
            </div>
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: "oklch(var(--primary))" }}
            >
              MediReminder
            </span>
          </div>
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center relative"
            style={{ background: "oklch(var(--secondary))" }}
          >
            <Bell size={18} style={{ color: "oklch(var(--primary))" }} />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
              style={{ background: "oklch(var(--primary))" }}
            >
              1
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>
          Good Morning, Atharva 👋
        </h1>
        <div className="flex items-center gap-1.5 mt-1">
          <CalendarDays
            size={14}
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <p
            className="text-sm font-medium"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            You have 1 reminder today
          </p>
        </div>
      </motion.header>

      <div className="px-5 flex flex-col gap-4">
        {/* Today's Medicine Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-white p-5 card-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold" style={{ color: "#1A1A1A" }}>
              Today's Medicine
            </h2>
            <AnimatePresence mode="wait">
              {isTaken ? (
                <motion.span
                  key="taken"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "oklch(0.92 0.08 145)",
                    color: "oklch(0.45 0.17 145)",
                  }}
                >
                  ✓ Taken
                </motion.span>
              ) : (
                <motion.span
                  key="pending"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "oklch(0.96 0.1 80)",
                    color: "oklch(0.58 0.18 68)",
                  }}
                >
                  ⏰ Pending
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div
            className="rounded-2xl p-4 mb-4"
            style={{ background: "oklch(var(--secondary))" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(var(--primary))" }}
              >
                <Pill size={20} color="white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
                  Paracetamol
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  500mg · 1 tablet
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} style={{ color: "oklch(var(--primary))" }} />
              <span
                className="text-base font-semibold"
                style={{ color: "oklch(var(--primary))" }}
              >
                10:00 AM
              </span>
            </div>
          </div>
          <motion.button
            data-ocid="reminder.primary_button"
            onClick={onMarkTaken}
            disabled={isTaken}
            whileTap={{ scale: isTaken ? 1 : 0.97 }}
            className="w-full py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2.5 transition-all duration-300"
            style={{
              background: isTaken
                ? "oklch(0.6 0.18 145)"
                : "oklch(var(--primary))",
              color: "white",
              boxShadow: isTaken
                ? "0 4px 16px rgba(34,197,94,0.3)"
                : "0 4px 20px rgba(47,128,237,0.35)",
              cursor: isTaken ? "default" : "pointer",
            }}
          >
            <CheckCircle size={22} strokeWidth={2.5} />
            {isTaken ? "Medicine Taken!" : "Mark as Taken"}
          </motion.button>
        </motion.div>

        {/* Upcoming Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl bg-white p-5 card-shadow"
        >
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} style={{ color: "oklch(var(--primary))" }} />
            <h2 className="text-base font-bold" style={{ color: "#1A1A1A" }}>
              Upcoming
            </h2>
          </div>
          <div
            className="flex items-center justify-between py-3 px-3 rounded-2xl"
            style={{ background: "oklch(var(--secondary))" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(var(--primary))" }}
              >
                <Moon size={16} color="white" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                  Vitamin D
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  1 capsule
                </p>
              </div>
            </div>
            <span
              className="text-sm font-bold"
              style={{ color: "oklch(var(--primary))" }}
            >
              8:00 PM
            </span>
          </div>
        </motion.div>

        {/* Add Medicine Button */}
        <motion.button
          data-ocid="add_medicine.primary_button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onAddMedicine}
          className="w-full py-4 rounded-3xl text-lg font-bold flex items-center justify-center gap-2.5 btn-glow"
          style={{ background: "oklch(var(--primary))", color: "white" }}
        >
          <Plus size={22} strokeWidth={3} /> Add Medicine
        </motion.button>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl bg-white p-5 card-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Activity size={18} style={{ color: "oklch(var(--primary))" }} />
              <h2 className="text-base font-bold" style={{ color: "#1A1A1A" }}>
                This Week
              </h2>
            </div>
            <span
              className="text-xl font-extrabold"
              style={{ color: "oklch(var(--primary))" }}
            >
              80%
            </span>
          </div>
          <div
            className="relative w-full h-3 rounded-full overflow-hidden mb-4"
            style={{ background: "oklch(var(--secondary))" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "oklch(var(--primary))" }}
            />
          </div>
          <div className="flex items-end justify-between gap-1.5">
            {weekData.map((d, i) => (
              <div
                key={d.day}
                className="flex flex-col items-center gap-1 flex-1"
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height:
                      d.status === "taken"
                        ? 44
                        : d.status === "missed"
                          ? 16
                          : 28,
                  }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  className="w-full rounded-t-lg"
                  style={{
                    background:
                      d.status === "taken"
                        ? "oklch(0.6 0.18 145)"
                        : d.status === "missed"
                          ? "oklch(0.75 0.12 27)"
                          : "oklch(var(--secondary))",
                  }}
                />
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {d.day}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HistoryScreen() {
  return (
    <motion.div
      key="history"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto pb-28"
    >
      <div className="px-6 pt-4 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={22} style={{ color: "oklch(var(--primary))" }} />
          <h1 className="text-2xl font-extrabold" style={{ color: "#1A1A1A" }}>
            History
          </h1>
        </div>
        <p
          className="text-sm"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          Track your medication journey
        </p>
      </div>

      {/* Stats Row */}
      <div className="px-5 mb-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Streak",
              value: "5 days",
              icon: Star,
              color: "oklch(0.72 0.18 68)",
            },
            {
              label: "Taken",
              value: "12",
              icon: CheckCircle,
              color: "oklch(0.6 0.18 145)",
            },
            {
              label: "Missed",
              value: "2",
              icon: X,
              color: "oklch(0.65 0.22 27)",
            },
          ].map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-2xl bg-white p-3 card-shadow flex flex-col items-center gap-1"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: `${color}22` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <span
                className="text-lg font-extrabold"
                style={{ color: "#1A1A1A" }}
              >
                {value}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* History List */}
      <div className="px-5 flex flex-col gap-3">
        {historyData.map((entry, ei) => (
          <motion.div
            key={entry.date}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ei * 0.08 }}
            className="rounded-3xl bg-white p-4 card-shadow"
            data-ocid={`history.item.${ei + 1}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-base font-bold" style={{ color: "#1A1A1A" }}>
                  {entry.day}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {entry.date}
                </p>
              </div>
              <span
                className="text-xs font-bold px-2 py-1 rounded-full"
                style={{
                  background: entry.medicines.every((m) => m.status === "taken")
                    ? "oklch(0.92 0.08 145)"
                    : "oklch(0.96 0.1 80)",
                  color: entry.medicines.every((m) => m.status === "taken")
                    ? "oklch(0.45 0.17 145)"
                    : "oklch(0.58 0.18 68)",
                }}
              >
                {entry.medicines.every((m) => m.status === "taken")
                  ? "All Taken"
                  : "Partial"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {entry.medicines.map((med) => (
                <div
                  key={`${med.name}-${med.time}`}
                  className="flex items-center justify-between py-2 px-3 rounded-xl"
                  style={{ background: "oklch(var(--secondary))" }}
                >
                  <div className="flex items-center gap-2">
                    <Pill
                      size={14}
                      style={{ color: "oklch(var(--primary))" }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#1A1A1A" }}
                    >
                      {med.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      {med.time}
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold"
                    style={{
                      color:
                        med.status === "taken"
                          ? "oklch(0.45 0.17 145)"
                          : "oklch(0.65 0.22 27)",
                    }}
                  >
                    {med.status === "taken" ? "✓" : "✗"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  const stats = [
    { label: "Medicines", value: "3" },
    { label: "Adherence", value: "80%" },
    { label: "Streak", value: "5d" },
  ];

  const settings = [
    { label: "Notifications", icon: Bell },
    { label: "Activity", icon: Activity },
    { label: "Privacy & Security", icon: Shield },
    { label: "Edit Profile", icon: Edit2 },
  ];

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full overflow-y-auto pb-28"
    >
      {/* Profile Hero */}
      <div className="px-6 pt-4 pb-6 flex flex-col items-center">
        <div
          className="w-24 h-24 rounded-[28px] flex items-center justify-center mb-3"
          style={{ background: "oklch(var(--secondary))" }}
        >
          <User size={44} style={{ color: "oklch(var(--primary))" }} />
        </div>
        <h1 className="text-2xl font-extrabold" style={{ color: "#1A1A1A" }}>
          Atharva
        </h1>
        <p
          className="text-sm mt-0.5"
          style={{ color: "oklch(var(--muted-foreground))" }}
        >
          atharva@example.com
        </p>
        <div
          className="flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full"
          style={{ background: "oklch(var(--secondary))" }}
        >
          <Heart size={12} style={{ color: "oklch(var(--primary))" }} />
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(var(--primary))" }}
          >
            Active & Healthy
          </span>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl bg-white p-4 card-shadow flex flex-col items-center gap-1"
            >
              <span
                className="text-2xl font-extrabold"
                style={{ color: "oklch(var(--primary))" }}
              >
                {value}
              </span>
              <span
                className="text-[11px] font-medium text-center"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="rounded-3xl bg-white card-shadow overflow-hidden">
          {settings.map(({ label, icon: Icon }, i) => (
            <button
              type="button"
              key={label}
              data-ocid={`profile.${label.toLowerCase().replace(/ /g, "_")}.button`}
              className="w-full flex items-center justify-between px-5 py-4 transition-colors hover:bg-slate-50"
              style={{
                borderBottom:
                  i < settings.length - 1
                    ? "1px solid oklch(var(--border))"
                    : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "oklch(var(--secondary))" }}
                >
                  <Icon size={18} style={{ color: "oklch(var(--primary))" }} />
                </div>
                <span
                  className="text-base font-semibold"
                  style={{ color: "#1A1A1A" }}
                >
                  {label}
                </span>
              </div>
              <ChevronRight
                size={18}
                style={{ color: "oklch(var(--muted-foreground))" }}
              />
            </button>
          ))}
        </div>

        {/* Logout */}
        <motion.button
          data-ocid="profile.delete_button"
          whileTap={{ scale: 0.97 }}
          onClick={onLogout}
          className="w-full py-4 rounded-2xl font-bold text-base border-2 transition-colors"
          style={{
            borderColor: "oklch(0.65 0.22 27)",
            color: "oklch(0.65 0.22 27)",
          }}
        >
          Sign Out
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [isTaken, setIsTaken] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineName, setMedicineName] = useState("");
  const [medicineTime, setMedicineTime] = useState("10:00");

  const isAppScreen =
    screen === "home" || screen === "history" || screen === "profile";

  const handleNavClick = (tab: NavTab) => {
    if (tab === "add") {
      setIsModalOpen(true);
      return;
    }
    setActiveTab(tab);
    setScreen(tab as Screen);
  };

  const handleSaveMedicine = () => {
    setIsModalOpen(false);
    setMedicineName("");
    setMedicineTime("10:00");
  };

  return (
    <div
      className="min-h-screen flex items-start justify-center py-10 px-4"
      style={{ background: "#d1d5db" }}
    >
      <div
        className="phone-frame relative w-[390px] bg-background overflow-hidden flex flex-col"
        style={{ minHeight: "844px", borderRadius: "44px" }}
      >
        {/* Status Bar */}
        <div className="flex items-center justify-between px-8 pt-4 pb-1 flex-shrink-0">
          <span
            className="text-xs font-semibold opacity-60"
            style={{
              color: isAppScreen
                ? "#1A1A1A"
                : screen === "splash"
                  ? "white"
                  : "#1A1A1A",
            }}
          >
            9:41
          </span>
          <div className="flex gap-1 items-center">
            <div
              className="w-3 h-3 rounded-full opacity-30"
              style={{
                background: isAppScreen
                  ? "#1A1A1A"
                  : screen === "splash"
                    ? "white"
                    : "#1A1A1A",
              }}
            />
            <div
              className="w-4 h-3 rounded-sm opacity-30"
              style={{
                background: isAppScreen
                  ? "#1A1A1A"
                  : screen === "splash"
                    ? "white"
                    : "#1A1A1A",
              }}
            />
            <div
              className="w-5 h-3 rounded-sm opacity-30"
              style={{
                background: isAppScreen
                  ? "#1A1A1A"
                  : screen === "splash"
                    ? "white"
                    : "#1A1A1A",
              }}
            />
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {screen === "splash" && (
              <SplashScreen key="splash" onNext={() => setScreen("login")} />
            )}
            {screen === "login" && (
              <LoginScreen
                key="login"
                onLogin={() => {
                  setScreen("home");
                  setActiveTab("home");
                }}
                onSignup={() => setScreen("signup")}
              />
            )}
            {screen === "signup" && (
              <SignupScreen
                key="signup"
                onSignup={() => {
                  setScreen("home");
                  setActiveTab("home");
                }}
                onBack={() => setScreen("login")}
              />
            )}
            {screen === "home" && (
              <HomeScreen
                key="home"
                isTaken={isTaken}
                onMarkTaken={() => setIsTaken(true)}
                onAddMedicine={() => setIsModalOpen(true)}
              />
            )}
            {screen === "history" && <HistoryScreen key="history" />}
            {screen === "profile" && (
              <ProfileScreen
                key="profile"
                onLogout={() => {
                  setScreen("login");
                  setActiveTab("home");
                  setIsTaken(false);
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Nav (only on app screens) */}
        {isAppScreen && (
          <nav
            className="absolute bottom-0 left-0 right-0 bg-white nav-shadow flex items-center justify-around px-2 pt-3 pb-6"
            style={{ borderRadius: "0 0 44px 44px" }}
          >
            {[
              { id: "home" as NavTab, icon: Home, label: "Home" },
              { id: "add" as NavTab, icon: Plus, label: "Add" },
              { id: "history" as NavTab, icon: History, label: "History" },
              { id: "profile" as NavTab, icon: User, label: "Profile" },
            ].map(({ id, icon: Icon, label }) => (
              <button
                type="button"
                key={id}
                data-ocid={`nav.${id}.tab`}
                onClick={() => handleNavClick(id)}
                className="flex flex-col items-center gap-1 flex-1 py-1 min-h-[48px] justify-center transition-all duration-200"
                style={{
                  color:
                    activeTab === id
                      ? "oklch(var(--primary))"
                      : "oklch(var(--muted-foreground))",
                }}
              >
                <div
                  className="relative flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: 40,
                    height: 32,
                    background:
                      activeTab === id
                        ? "oklch(var(--secondary))"
                        : "transparent",
                  }}
                >
                  <Icon size={22} strokeWidth={activeTab === id ? 2.5 : 1.8} />
                </div>
                <span className="text-[11px] font-semibold">{label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Add Medicine Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          data-ocid="add_medicine.dialog"
          className="w-[340px] rounded-3xl border-0 p-6"
          style={{
            background: "white",
            boxShadow: "0 24px 60px rgba(47,128,237,0.2)",
          }}
        >
          <DialogHeader className="mb-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(var(--primary))" }}
              >
                <Pill size={18} color="white" />
              </div>
              <DialogTitle
                className="text-xl font-bold"
                style={{ color: "#1A1A1A" }}
              >
                Add Medicine
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="medicine-name"
                className="text-base font-semibold"
                style={{ color: "#1A1A1A" }}
              >
                Medicine Name
              </Label>
              <Input
                id="medicine-name"
                data-ocid="add_medicine.input"
                placeholder="e.g. Paracetamol"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                className="h-12 text-base rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="medicine-time"
                className="text-base font-semibold"
                style={{ color: "#1A1A1A" }}
              >
                Time
              </Label>
              <Input
                id="medicine-time"
                type="time"
                value={medicineTime}
                onChange={(e) => setMedicineTime(e.target.value)}
                className="h-12 text-base rounded-2xl"
              />
            </div>
            <motion.button
              data-ocid="add_medicine.submit_button"
              whileTap={{ scale: 0.97 }}
              onClick={handleSaveMedicine}
              disabled={!medicineName.trim()}
              className="w-full py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: medicineName.trim()
                  ? "oklch(var(--primary))"
                  : "oklch(var(--muted))",
                color: medicineName.trim()
                  ? "white"
                  : "oklch(var(--muted-foreground))",
                cursor: medicineName.trim() ? "pointer" : "default",
                boxShadow: medicineName.trim()
                  ? "0 4px 20px rgba(47,128,237,0.3)"
                  : "none",
              }}
            >
              <CheckCircle size={20} /> Save Medicine
            </motion.button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
