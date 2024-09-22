import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="first" className="w-[400px] flex gap-7">
      <TabsList className=" h-[200px] grid w-full grid-rows-3">
        <TabsTrigger value="first">Real Student Success Stories</TabsTrigger>
        <TabsTrigger value="second">Unlimited Possibilities</TabsTrigger>
        <TabsTrigger value="third">Find Your Ideal Program</TabsTrigger>
      </TabsList>
      <TabsContent value="first">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1">Explore college applications from talented students across the world, from top state schools to Ivy leagues.</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="second">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1">Explore our vast database of over 100+ new opportunities that align with your interests and goals.</div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="third">
        <Card>
          <CardContent className="space-y-2">
            <div className="space-y-1">Search through our database to find the best program that aligns with your interests and goals.</div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
