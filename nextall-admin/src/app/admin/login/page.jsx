"use client";
import { redirect } from 'next/navigation';

export default function LoginPage() {
  redirect('/admin/dashboard');
  return null;
}
