"use client";

import Card from "@/components/Card";
import GradientButton from "@/components/GradientButton";
import PageLayout from "@/components/PageLayout";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export default function UserPage() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <PageLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <GradientButton
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center"
        >
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isFetching ? "animate-spin" : ""}`}
          />
          Refresh Data
        </GradientButton>
      </div>

      {isLoading && (
        <div className="text-center py-12">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-r-transparent align-[-0.125em]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <p className="mt-2 text-muted-foreground">Loading users...</p>
        </div>
      )}

      {isError && (
        <div className="text-center py-12 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-red-500 dark:text-red-400">
            Error: {(error as Error).message}
          </p>
          <GradientButton onClick={() => refetch()} className="mt-4">
            Try Again
          </GradientButton>
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((user) => (
            <Card
              key={user.id}
              title={user.name}
              description={`${user.email} • ${user.company.name}`}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
}
