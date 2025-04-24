import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, DollarSign, TrendingUp, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import logo from '../../public/ye.webp'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-rose-600" />
            <span className="text-xl font-bold">The Rebellious</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-rose-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Community
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-rose-600 transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-rose-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Break Free From Financial Chains
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join the rebellion against traditional financial systems. Take control of your money, your future, and your freedom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-rose-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-rose-600 text-white">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Financial Freedom Principles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our approach is built on challenging conventional wisdom and empowering you to take control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-rose-600" />
                  <CardTitle className="mt-4">Debt Liberation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Break free from the cycle of debt with our revolutionary strategies that challenge traditional financial advice.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-rose-600" />
                  <CardTitle className="mt-4">Wealth Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn unconventional investment approaches that build real wealth regardless of your starting point.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-rose-600" />
                  <CardTitle className="mt-4">Financial Independence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Achieve true freedom with passive income streams and strategic financial planning that works for rebels.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50 dark:bg-rose-950/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Thousands Who've Broken Free</h2>
                <ul className="mt-8 grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-rose-600" />
                    <span>Over 10,000 people have achieved financial independence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-rose-600" />
                    <span>$50M+ in collective debt eliminated by our community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-rose-600" />
                    <span>92% of members report improved financial confidence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-rose-600" />
                    <span>Average wealth growth of 27% in the first year</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <blockquote className="text-xl italic">
                    "The Rebellious changed my entire perspective on money. I went from drowning in debt to building real wealth in just 18 months. Their unconventional approach was exactly what I needed."
                  </blockquote>
                  <div className="font-semibold">Sarah K.</div>
                  <div className="text-sm text-muted-foreground">Financial Rebel Since 2022</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Rebellion?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our newsletter for exclusive financial freedom strategies and be the first to know about new resources.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <div className="grid w-full gap-2">
                <form className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit" className="bg-rose-600 hover:bg-rose-700">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Join 25,000+ financial rebels. No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-rose-600" />
            <p className="text-sm font-medium">© 2025 The Rebellious. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
