import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema=z.object({
    email:z.string().optional(),
    name:z.string().min(1,"name is required"),
    addressLine1:z.string().min(1,"address line is required"),
    city:z.string().min(1,"city is required"),
    country:z.string().min(1,"country is required"),
});
type UserFormData=z.infer<typeof formSchema>;
type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};
const UserProfileForm =({onSave,isLoading }:Props)=>{
    const form =useForm<UserFormData>({
        resolver:zodResolver(formSchema)
    });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold ">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} disabled className="bg-white"></Input>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white "></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-black">addresLine1</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-black">city</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-black">country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white"></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton></LoadingButton>
        ) : (
          <Button type="submit" className="bg-orange-500">
            {" "}
            submit
          </Button>
        )}
      </form>
    </Form>
  );
};



export default UserProfileForm

