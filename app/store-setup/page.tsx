"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldGroup,
    
    FieldContent,
    FieldDescription,
    FieldError,
    
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";

// Form
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
// End Form

import { ArrowRightIcon, Box, Building, Circle, CircleCheck, Currency, Download, GraduationCap, Heart, Minus, Plus, School, Search, ShoppingBag, UploadCloud, User, X, Check, ChevronsUpDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 
import {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from '@/components/ui/shadcn-io/color-picker';

import Color from 'color';
import { Button } from "@/components/ui/button";
import ProductSyncGauge from "@/components/charts/ProductSyncGauge";
import ProductSyncProgress from "@/components/charts/ProductSync";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Form
const storeTypes = [
  {
    id: "district",
    label: "District",
    value: "district",
  },
  {
    id: "school",
    label: "School",
    value: "school",
  },
  {
    id: "organization",
    label: "Organization",
    value: "organization",
  },
] as const
// End Form

const schools = [
  {
    id: '1001',
    name: "DR. Lopez Academy",
    logo: "/images/store-logos/lopez-academy-logo.png",
    revenue: 45403.89,
    storeLink: "https://lopezacademy.oxnardsdstore.org/"
  },
  {
    id: '1002',
    name: "Marshall Schools",
    logo: "/images/store-logos/marshall.png",
    revenue: 24679.89,
    storeLink: "https://marshall.oxnardsdstore.org/"
  },
  {
    id: '1003',
    name: "Brekke School",
    logo: "/images/store-logos/dolphins.png",
    revenue: 97646.89,
    storeLink: "https://www.brekke.oxnardsdstore.org/"
  }
];

const districts = [
    {
        id: '1004',
        name: "Calsa School",
        logo: "/images/store-logos/calsa.avif",
        revenue: 83546.89,
        storeLink: "https://calsastore.org/"
    },
    {
        id: '1005',
        name: "Employee Store",
        logo: "/images/store-logos/employee.webp",
        revenue: 546546.89,
        storeLink: "https://oxnardsdstore.org/"
    },
    {
        id: '1006',
        name: "Santa Rosa City Schools",
        logo: "/images/store-logos/srcs.avif",
        revenue: 86567.89,
        storeLink: "https://www.srcschoolsstore.org/"
    },
]

export default function Page() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [searchValue, setSearchValue] = useState("");
    const [primaryColor, setPrimaryColor] = useState("#c559ff");
    const [secondaryColor, setSecondaryColor] = useState('#5a00ce');
    const [naturalColors, setNaturalColors] = useState([
        { id: "c1", name: "Black Heather", value: "#2d2d2d" },
        { id: "c2", name: "Carolina Blue Heather", value: "#6f9dbd" },
        { id: "c3", name: "Deep Orange Heather", value: "#df7b47" },
        { id: "c4", name: "Deep Red Heather", value: "#a84b4b" },
        { id: "c5", name: "Kelly Heather", value: "#4b7552" },
        { id: "c6", name: "Metal Grey Heather", value: "#5e5e5e" },
        { id: "c7", name: "Olive Drab Green Heather", value: "#5a5d47" },
        { id: "c8", name: "Team Purple Heather", value: "#6c5d8b" },
        { id: "c9", name: "True Navy Heather", value: "#38455b" },
        { id: "c10", name: "True Royal Heather", value: "#4468b2" },
        { id: "c11", name: "Turquoise Heather", value: "#5ca6be" },
        { id: "c12", name: "Vintage Athletic Maroon", value: "#64373e" },
        { id: "c13", name: "Vintage Forest Green", value: "#344b3a" },
        { id: "c14", name: "Vintage Sapphire", value: "#2f5073" },
    ]);

    const [primaryColors, setPrimaryColors] = useState([
        { id: "c1", name: "Black Heather", value: "#2d2d2d" },
        { id: "c2", name: "Carolina Blue Heather", value: "#6f9dbd" },
        { id: "c3", name: "Deep Orange Heather", value: "#df7b47" },
        { id: "c4", name: "Deep Red Heather", value: "#a84b4b" },
        { id: "c5", name: "Kelly Heather", value: "#4b7552" },
        { id: "c6", name: "Metal Grey Heather", value: "#5e5e5e" },
        { id: "c7", name: "Olive Drab Green Heather", value: "#5a5d47" },
        { id: "c8", name: "Team Purple Heather", value: "#6c5d8b" },
        { id: "c9", name: "True Navy Heather", value: "#38455b" },
        { id: "c10", name: "True Royal Heather", value: "#4468b2" },
        { id: "c11", name: "Turquoise Heather", value: "#5ca6be" },
        { id: "c12", name: "Vintage Athletic Maroon", value: "#64373e" },
        { id: "c13", name: "Vintage Forest Green", value: "#344b3a" },
        { id: "c14", name: "Vintage Sapphire", value: "#2f5073" },
    ]);

    const isPrimaryDark = Color(primaryColor).isDark();
    const isSecondaryDark = Color(secondaryColor).isDark();

    const storeLogoRef = useRef<HTMLInputElement | null>(null);
    const productLogoRef = useRef<HTMLInputElement | null>(null);
    
    const [storeLogoFile, setStoreLogoFile] = useState<File | null>(null);
    const [productLogoFiles, setProductLogoFiles] = useState<File[]>([]);

    const [storeLogoPreview, setStoreLogoPreview] = useState<string | null>(null);
    const [productLogoPreview, setProductLogoPreview] = useState<string | null>(null);

    const handleSearch = (selectedVal: string) => {
        setSearchValue(selectedVal)

        console.log('Search Value', selectedVal);
    }

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>, logoType:string) => {
        const selectedFiles = Array.from(event.target.files || []);

        console.log('selectedFile', event.target.files)
        console.log('logoType', logoType)

        if(selectedFiles) {
            if (logoType == 'store'){
                setStoreLogoFile(selectedFiles?.[0])
                setStoreLogoPreview(URL.createObjectURL(selectedFiles?.[0]));
                // console.log('SelectedFile', selectedFile)
            } else {
                setProductLogoFiles( selectedFiles )
                setProductLogoPreview(URL.createObjectURL(selectedFiles?.[0]));
                // console.log('SelectedFile', selectedFile)
            }
                
        }
    }

    const handleLogoRemove = (logoType:string) => {

        if(logoType == 'store') {
            setStoreLogoFile(null);
            setStoreLogoPreview(null);

            if(storeLogoRef.current) storeLogoRef.current.value = '';
        } else {
            setProductLogoFiles([]);
            setProductLogoPreview(null);

            if(productLogoRef.current) productLogoRef.current.value = '';
        }
    }

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((p) => (p < 100 ? p + 10 : p));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const steps = [
        {"id": 'step1', "value":"Starting Product Syncing Process", "status": 'done'},
        {"id": 'step2', "value":"Connecting and Authenticating with Shopify Store", "status": 'active'},
        {"id": 'step3', "value":"Fetching Products from Central Database", "status": 'pending'},
        {"id": 'step4', "value":"Applying Logos to Products", "status": 'pending'},
        {"id": 'step5', "value":"Importing Products to Shopify", "status": 'pending'},
        {"id": 'step6', "value":"Completing Product Sync", "status": 'pending'},
        {"id": 'step7', "value":"Cleaning Up Temporary Data", "status": 'pending'},
        {"id": 'step8', "value":"Finalizing - All Products Imported to Shopify", "status": 'pending'}
    ];

    const products = [
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Gildan® DryBlend. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#PTDKS-ERXNF",
                            name: "Men's Performance. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Unisex 75D Pique. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Gildan® DryBlend. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#PTDKS-ERXNF",
                            name: "Men's Performance. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Unisex 75D Pique. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Gildan® DryBlend. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#PTDKS-ERXNF",
                            name: "Men's Performance. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#GSWS-ERXNF",
                            name: "Unisex 75D Pique. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        },
                        {
                            id: "#OJKQS-ERXNF",
                            name: "Nike Tech. Syncing Done",
                            image: "/images/store-logos/marshall.png",
                        }
                    ];

    const formSchema = z.object({
                        storename: z
                            .string()
                            .min(3, "Store Name must be at least 3 characters."),
                        storeurl: z
                            .url("Store URL must be in the format - https://admin.shopify.com/store/abc")
                            .min(10),
                        storetype: z
                            .string()
                            .min(6, "Store type should either be District or School"),
                        linkeddistrict: z
                            .string()
                            .optional(),
                        authtoken: z
                            .string()
                            .min(5, "Auth token must be in the format - sha_dhgefbvgbejgvevhcbwfvjh"),
                    }
                )
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            storename: "",
            storeurl: "",
            storetype: "district",
            authtoken: "",
            linkeddistrict: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('onSubmit', data)

        toast(`${data.storename} ${data.storetype} store has been connected`)
    }

    return (
        <div>
            {/* Step 1 - Store Connect */}
            <div className="ac-setup ac-step-1">
                <Card className="py-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="pe-5 no-underline hover:no-underline ac-step-trigger cursor-pointer">
                                <CardHeader className="flex justify-between w-full">
                                    <CardTitle className="text-2xl">Step 1: Store Connect</CardTitle>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Separator />

                                <CardContent className="mt-5">
                                    <Empty className="p-0 md:p-0">
                                        <EmptyHeader>
                                            <EmptyMedia variant="icon"><Building /></EmptyMedia>
                                            <EmptyTitle>Add New Store</EmptyTitle>
                                            <EmptyDescription>Can&apos;t find your store? Let's connect.</EmptyDescription>
                                        </EmptyHeader>
                                        <EmptyContent>
                                            <div className="flex gap-2">
                                                <Dialog>
                                                    <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                                                        <DialogTrigger asChild>
                                                            <Button>Connect Store</Button>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Connect New Store</DialogTitle>
                                                                <DialogDescription>Add store details and click Save when you&apos;re done.
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <FieldGroup>
                                                                <Controller
                                                                name="storename"
                                                                control={form.control}
                                                                render={({ field, fieldState }) => (
                                                                    <Field data-invalid={fieldState.invalid}>
                                                                        <FieldLabel htmlFor="amicolor-storename">
                                                                            Store Name
                                                                        </FieldLabel>
                                                                        <Input
                                                                            {...field}
                                                                            id="amicolor-storename"
                                                                            aria-invalid={fieldState.invalid}
                                                                            placeholder="Abc"
                                                                            autoComplete="storename"
                                                                        />
                                                                        {fieldState.invalid && (
                                                                            <FieldError errors={[fieldState.error]} />
                                                                        )}
                                                                    </Field>
                                                                )}
                                                                />
                                                            </FieldGroup>
                                                            
                                                            <FieldGroup>
                                                                <Controller
                                                                name="storeurl"
                                                                control={form.control}
                                                                render={({ field, fieldState }) => (
                                                                    <Field data-invalid={fieldState.invalid}>
                                                                    <FieldLabel htmlFor="amicolor-storeurl">
                                                                        Store URL
                                                                    </FieldLabel>
                                                                    <Input
                                                                        {...field}
                                                                        id="amicolor-storeurl"
                                                                        aria-invalid={fieldState.invalid}
                                                                        placeholder="https://admin.shopify.com/store/abc"
                                                                        autoComplete="storeurl"
                                                                    />
                                                                    {fieldState.invalid && (
                                                                        <FieldError errors={[fieldState.error]} />
                                                                    )}
                                                                    </Field>
                                                                )}
                                                                />
                                                            </FieldGroup>
                                                            
                                                            <FieldGroup>
                                                                <Controller
                                                                name="storetype"
                                                                control={form.control}
                                                                render={({ field, fieldState }) => {
                                                                    const isInvalid = fieldState.invalid
                                                                    return (
                                                                    <FieldSet data-invalid={isInvalid}>
                                                                        <FieldLegend variant="label">Store Type</FieldLegend>
                                                                        <RadioGroup
                                                                            name={field.name}
                                                                            value={field.value}
                                                                            onValueChange={field.onChange}
                                                                            aria-invalid={isInvalid}
                                                                            className="flex flex-row justify-center items-center"
                                                                        >
                                                                        {storeTypes.map((storeTypes)=>(
                                                                            <FieldLabel htmlFor={storeTypes.id}>
                                                                                <Field orientation="horizontal">
                                                                                    <FieldContent>
                                                                                        <FieldTitle>{storeTypes.label}</FieldTitle>
                                                                                    </FieldContent>
                                                                                    <RadioGroupItem
                                                                                        style={{width:"15px", height: "15px", top: "1px"}}
                                                                                        value={storeTypes.value}
                                                                                        id={storeTypes.id}
                                                                                        className="relative"
                                                                                    />
                                                                                </Field>
                                                                            </FieldLabel>
                                                                        ))}

                                                                        </RadioGroup>
                                                                        {isInvalid && <FieldError errors={[fieldState.error]} />}
                                                                    </FieldSet>
                                                                    )
                                                                }}
                                                                />
                                                            </FieldGroup>
                                                            
                                                            {form.watch("storetype") === "school" && (
                                                                <div className={`transition-all duration-300 overflow-hidden ${form.watch("storetype") === "school" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                                                    <FieldGroup>
                                                                        <Controller
                                                                        name="linkeddistrict"
                                                                        control={form.control}
                                                                        render={({ field, fieldState }) => (
                                                                            <Field data-invalid={fieldState.invalid}>
                                                                            <FieldLabel htmlFor="amicolor-linked-district">
                                                                                Linked District
                                                                            </FieldLabel>
                                                                            <Popover open={open} onOpenChange={setOpen}>
                                                                                <PopoverTrigger asChild>
                                                                                    <Button
                                                                                    variant="outline"
                                                                                    role="combobox"
                                                                                    aria-expanded={open}
                                                                                    className="justify-between"
                                                                                    >
                                                                                    {value
                                                                                        ? (
                                                                                            districts.find((district) => district.name === value)?.name
                                                                                        ): (
                                                                                            <div className="opacity-50">Select district</div>
                                                                                        )
                                                                                    }
                                                                                    <ChevronsUpDown className="opacity-50" />
                                                                                    </Button>
                                                                                </PopoverTrigger>
                                                                                <PopoverContent className="p-0 w-full">
                                                                                    <Command>
                                                                                    <CommandInput placeholder="Search District" className="h-9" />
                                                                                    <CommandList className="w-[450px] max-w-full">
                                                                                        <CommandEmpty>No district found.</CommandEmpty>
                                                                                        <CommandGroup>
                                                                                        {districts.map((district) => (
                                                                                            <CommandItem
                                                                                            key={district.id}
                                                                                            value={district.name}
                                                                                            id="amicolor-linked-district"
                                                                                            onSelect={(currentValue) => {
                                                                                                setValue(currentValue === value ? "" : currentValue)
                                                                                                setOpen(false)
                                                                                            }}
                                                                                            >
                                                                                            {district.name}
                                                                                            <Check
                                                                                                className={`ml-auto ${value === district.name ? "opacity-100" : "opacity-0"}`}
                                                                                            />
                                                                                            </CommandItem>
                                                                                        ))}
                                                                                        </CommandGroup>
                                                                                    </CommandList>
                                                                                    </Command>
                                                                                </PopoverContent>
                                                                            </Popover>


                                                                            {fieldState.invalid && (
                                                                                <FieldError errors={[fieldState.error]} />
                                                                            )}
                                                                            </Field>
                                                                        )}
                                                                        />
                                                                    </FieldGroup>
                                                                </div>
                                                            )}
                                                            <FieldGroup>
                                                                <Controller
                                                                name="authtoken"
                                                                control={form.control}
                                                                render={({ field, fieldState }) => (
                                                                    <Field data-invalid={fieldState.invalid}>
                                                                    <FieldLabel htmlFor="amicolor-authtoken">
                                                                        Auth Token
                                                                    </FieldLabel>
                                                                    <Input
                                                                        {...field}
                                                                        id="amicolor-authtoken"
                                                                        aria-invalid={fieldState.invalid}
                                                                        placeholder="sha_dhgefbvgbejgvevhcbwfvjh"
                                                                        autoComplete="authtoken"
                                                                    />
                                                                    {fieldState.invalid && (
                                                                        <FieldError errors={[fieldState.error]} />
                                                                    )}
                                                                    </Field>
                                                                )}
                                                                />
                                                            </FieldGroup>

                                                            <Field orientation="horizontal">
                                                                <Button type="button" variant="outline" onClick={() => form.reset()}>
                                                                    Reset
                                                                </Button>
                                                                <Button type="submit" form="form-rhf-input">
                                                                    Save
                                                                </Button>
                                                            </Field>
                                                        </DialogContent>
                                                    </form>
                                                </Dialog>
                                            </div>
                                        </EmptyContent>
                                    </Empty>
                                </CardContent>

                                <CardContent className="mt-5">
                                    <Command>
                                        <CommandInput 
                                            placeholder="Search Store.." 
                                            value={searchValue}
                                            onValueChange={setSearchValue}
                                        />
                                        <CommandList>
                                            <CommandEmpty>No Store Registered</CommandEmpty>
                                                <CommandGroup heading="Districts">
                                                    {districts.map((district)=> (
                                                        <CommandItem key={district.id} onSelect={()=>handleSearch(district.name)}>
                                                            <GraduationCap />
                                                            <span>{district.name}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                                <CommandGroup heading="Schools">
                                                    {schools.map((school)=> (
                                                        <CommandItem key={school.id} onSelect={()=>handleSearch(school.name)}>
                                                            <School />
                                                            <span>{school.name}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
            
            {/* Step 2 - Store Logo and Color Filtering */}
            <div className="ac-setup ac-step-2 mt-7">
                <Card className="py-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="pe-5 no-underline hover:no-underline ac-step-trigger cursor-pointer">
                                <CardHeader className="flex justify-between w-full">
                                    <CardTitle className="text-2xl">Step 2: Store Logo</CardTitle>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Separator />
                                <CardContent>
                                    <div 
                                        className="amicolor-upload h-50 border-2 border-dashed flex justify-center rounded-lg p-6 transition-all text-center items-center"
                                        onClick={()=>storeLogoRef.current?.click()}
                                    >
                                        <input ref={storeLogoRef} onChange={(e)=>handleLogoChange(e, 'store')} type="file" accept="image/png, image/jpeg, image/jpg, image/webp" className="hidden" />
                                        
                                        {storeLogoPreview ? (
                                            <div className="relative w-full h-48 flex items-center justify-center">
                                                <Image
                                                src={storeLogoPreview}
                                                alt="Logo Preview"
                                                fill
                                                className="object-contain rounded-md"
                                                />
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLogoRemove('store');
                                                    }}
                                                    className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80 transition cursor-pointer"
                                                >
                                                    <X size={14} />
                                                </button>
                                        </div>
                                        ):(
                                            <div className="flex flex-col text-center justify-center items-center gap-1 cursor-pointer">
                                                <UploadCloud className="text-center h-15 w-full" />
                                                <p className="font-medium">Browse file to upload</p>
                                                <p className="text-xs opacity-70">Accepts .jpg, .png, and .webp</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid auto-rows-min gap-2 md:grid-cols-3 mt-10">
                                        <div className="amicolor-primary amicolor-col">
                                            <CardTitle className="text-xl">Store Color</CardTitle>
                                            <div className="flex mt-5 gap-4">
                                                <div>
                                                    <ColorPicker
                                                        className="w-full amicolor-picker"
                                                        onChange={(rgba: number[]) => {
                                                            const [r, g, b, a] = rgba;
                                                            const hex = Color.rgb(r, g, b).hex();
                                                            setPrimaryColor(hex);
                                                        }}
                                                    >
                                                        <ColorPickerSelection />
                                                        <div className="flex items-center gap-4">
                                                        <ColorPickerEyeDropper />
                                                        <div className="grid w-full gap-1">
                                                            <ColorPickerHue />
                                                            <ColorPickerAlpha />
                                                        </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <ColorPickerOutput />
                                                            <ColorPickerFormat />
                                                        </div>
                                                    </ColorPicker>
                                                </div>
                                                <div 
                                                    className={`amicolor-thumb flex items-center justify-center w-24 rounded-2xl shadow-md font-semibold ${isPrimaryDark?"text-white":"text-black"}`}
                                                    style={{backgroundColor: primaryColor}}
                                                >
                                                    <span className="-rotate-90">
                                                        {primaryColor}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="amicolor-primary amicolor-col">
                                            <CardTitle className="text-xl">Secondary Store Color</CardTitle>
                                            <div className="flex mt-5 gap-4">
                                                <div>
                                                    <ColorPicker
                                                        className="w-full amicolor-picker"
                                                        onChange={(rgba: number[]) => {
                                                            const [r, g, b, a] = rgba;
                                                            const hex = Color.rgb(r, g, b).hex();
                                                            setSecondaryColor(hex);
                                                        }}
                                                    >
                                                        <ColorPickerSelection />
                                                        <div className="flex items-center gap-4">
                                                        <ColorPickerEyeDropper />
                                                        <div className="grid w-full gap-1">
                                                            <ColorPickerHue />
                                                            <ColorPickerAlpha />
                                                        </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <ColorPickerOutput />
                                                            <ColorPickerFormat />
                                                        </div>
                                                    </ColorPicker>
                                                </div>
                                                <div 
                                                    className={`amicolor-thumb flex items-center justify-center w-24 rounded-2xl shadow-md font-semibold ${isSecondaryDark?"text-white":"text-black"}`}
                                                    style={{backgroundColor: secondaryColor}}
                                                >
                                                    <span className="-rotate-90">
                                                        {secondaryColor}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="amicolor-natural w-full">
                                            <CardTitle className="text-xl">Swatch Colors</CardTitle>
                                            <div className="flex gap-5 mt-5 flex-col">
                                                <div className="flex-col flex gap-3">
                                                    <CardTitle className="text-xl mt-5">Primary</CardTitle>
                                                    <MultiSelect>
                                                        <MultiSelectTrigger className="w-full max-w-[400px]">
                                                            <MultiSelectValue placeholder="Select Natural Colors" />
                                                        </MultiSelectTrigger>
                                                        <MultiSelectContent>
                                                            {/* Items must be wrapped in a group for proper styling */}
                                                            <MultiSelectGroup>
                                                                {naturalColors.map((naturalColor)=> (
                                                                    <MultiSelectItem key={naturalColor.id} value={naturalColor.name}>
                                                                        <span className="h-5 w-5" style={{backgroundColor: naturalColor.value}}></span>
                                                                        {naturalColor.name}
                                                                    </MultiSelectItem>
                                                                ))}
                                                            </MultiSelectGroup>
                                                        </MultiSelectContent>
                                                    </MultiSelect>

                                                    {/* <Separator className="mt-10 mb-8" /> */}
                                                    <CardTitle className="text-xl mt-5">Natural</CardTitle>
                                                    <MultiSelect>
                                                        <MultiSelectTrigger className="w-full max-w-[400px]">
                                                            <MultiSelectValue placeholder="Select Natural Colors" />
                                                        </MultiSelectTrigger>
                                                        <MultiSelectContent>
                                                            {/* Items must be wrapped in a group for proper styling */}
                                                            <MultiSelectGroup>
                                                                {naturalColors.map((naturalColor)=> (
                                                                    <MultiSelectItem key={naturalColor.id} value={naturalColor.name}>
                                                                        <span className="h-5 w-5" style={{backgroundColor: naturalColor.value}}></span>
                                                                        {naturalColor.name}
                                                                    </MultiSelectItem>
                                                                ))}
                                                            </MultiSelectGroup>
                                                        </MultiSelectContent>
                                                    </MultiSelect>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
            
            {/* Step 3 - Product Logo */}
            <div className="ac-setup ac-step-3 mt-7">
                <Card className="py-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="pe-5 no-underline hover:no-underline ac-step-trigger cursor-pointer">
                                <CardHeader className="flex justify-between w-full">
                                    <CardTitle className="text-2xl">Step 3: Upload Product Logo</CardTitle>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Separator />
                                <CardContent>
                                    <div 
                                        className="relative amicolor-upload min-h-50 border-2 border-dashed flex justify-center rounded-lg p-6 transition-all text-center items-center"
                                        onClick={()=>productLogoRef.current?.click()}
                                    >
                                        <input ref={productLogoRef} onChange={(e)=>handleLogoChange(e, 'product')} type="file" accept="image/png, image/jpeg, image/jpg, image/webp, image/avif"  className="hidden" />
                                        
                                        {productLogoPreview ? (
                                            <>
                                                <div className="w-full flex flex-row gap-2 justify-center flex-wrap">
                                                    {productLogoFiles.map((productFile)=>(
                                                        <div className="flex items-center justify-center border rounded-md p-1 bg-white">
                                                            <Image
                                                            src={URL.createObjectURL(productFile)}
                                                            alt="Logo Preview"
                                                            width={250}
                                                            height={250}
                                                            className=""
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLogoRemove('product');
                                                    }}
                                                    className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black/80 transition cursor-pointer"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </>
                                        ):(
                                            <div className="flex flex-col text-center justify-center items-center gap-1 cursor-pointer">
                                                <UploadCloud className="text-center h-15 w-full" />
                                                <p className="font-medium">Browse file to upload</p>
                                                <p className="text-xs opacity-70">Accepts .jpg, .png, and .webp</p>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
            
            {/* Step 4 - Product Sync */}
            <div className="ac-setup ac-step-4 mt-7">
                <Card className="py-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="pe-5 no-underline hover:no-underline ac-step-trigger cursor-pointer">
                                <CardHeader className="flex justify-between w-full">
                                    <CardTitle className="text-2xl">Step 4: Product Sync</CardTitle>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Separator />
                                <CardContent>
                                    <div className="flex items-center justify-center flex-col">
                                        {/* <ProductSyncProgress value={progress} total={100} label="Product syncing in Progress" /> */}

                                        <div className="flex w-full md:w-4/5 h-100">
                                            <div className="p-5 border rounded w-3/5 overflow-scroll">
                                                <CardTitle className="text-2xl">Initiating Product Syncing</CardTitle>
                                                <ul className="mt-5 text-sm flex flex-col gap-4 amicolor-process-list">
                                                    {steps.map((step)=> (
                                                        <li key={step.id} 
                                                            className={`flex gap-2 items-center ${step.status}`}   
                                                        >
                                                            { step?.status === 'pending'?<Circle />:<CircleCheck />}
                                                            {step.value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex-1 p-5 pb-0 border rounded">
                                                <ScrollArea className="h-full">
                                                    <ul className="space-y-2">
                                                        {products.map((product, index) => (
                                                            <li
                                                            key={index}
                                                            className="flex items-center gap-4 rounded-xl"
                                                            >
                                                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50">
                                                                <Image
                                                                src={product.image}
                                                                alt={product.name}
                                                                width={30}
                                                                height={30}
                                                                className="object-contain"
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-sm">{product.id}</div>
                                                                <div className="text-sm opacity-70">{product.name}</div>
                                                            </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </ScrollArea>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>

            {/* Step 5 - Preparing Theme */}
            <div className="ac-setup ac-step-4 mt-7" style={{ "--hoverColor": primaryColor } as React.CSSProperties}>
                <Card className="py-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                        >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="pe-5 no-underline hover:no-underline ac-step-trigger cursor-pointer">
                                <CardHeader className="flex justify-between w-full">
                                    <CardTitle className="text-2xl">Step 5: Preparing theme</CardTitle>
                                </CardHeader>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Separator />
                                <CardHeader>
                                    <CardTitle className="text-xl">Preparing Theme</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Card className="p-5">
                                        <div className="bg-gray-200 w-full flex justify-center w-full p-5 md:p-10 rounded-2xl flex-col">
                                            <div className="flex w-full justify-center">
                                                <div className="flex flex-col md:w-5/6 w-full">
                                                    {/* 🔹 Top Announcement Bar */}
                                                    <div className="text-white text-center py-2 text-sm font-semibold" style={{background: primaryColor}}>
                                                        $5 Dollar Shipping On All Orders!
                                                    </div>

                                                    {/* 🔹 Navbar */}
                                                    <header className="bg-white border-b">
                                                        <div className="container mx-auto flex items-center justify-between py-2 px-6">
                                                        {/* Logo */}
                                                        <div className="flex items-center gap-3">
                                                            <Image
                                                            src={storeLogoPreview}
                                                            alt="Marshall School Store"
                                                            width={200}
                                                            height={75}
                                                            />
                                                        </div>

                                                        {/* Nav Links */}
                                                        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                                                            <a href="#" className="hover:text-[var(--hoverColor)]">MEN</a>
                                                            <a href="#" className="hover:text-[var(--hoverColor)]">WOMEN</a>
                                                            <a href="#" className="hover:text-[var(--hoverColor)]">YOUTH</a>
                                                            <a href="#" className="hover:text-[var(--hoverColor)]">UNISEX</a>
                                                            <a href="#" className="hover:text-[var(--hoverColor)]">ACCESSORIES</a>
                                                        </nav>

                                                        {/* Icons */}
                                                        <div className="flex items-center gap-4 text-gray-700">
                                                            <Search size={20} className="cursor-pointer hover:text-[var(--hoverColor)]" />
                                                            <User size={20} className="cursor-pointer hover:text-[var(--hoverColor)]" />
                                                            <Heart size={20} className="cursor-pointer hover:text-[var(--hoverColor)]" />
                                                            <div className="relative">
                                                            <ShoppingBag size={20} className="cursor-pointer hover:text-[var(--hoverColor)]" />
                                                            <span className="absolute -top-2 -right-2 text-[10px] text-white rounded-full px-1.5 py-0.5" style={{background: primaryColor}}>0</span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </header>

                                                    {/* 🔹 Hero Section */}
                                                    <section className="relative bg-gradient-to-r from-white to-gray-100 overflow-hidden">
                                                        <div className="container mx-auto px-6 pt-5 flex flex-col md:flex-row items-center">
                                                            {/* Left Text Section */}
                                                            <div className="flex-1 text-center z-10">
                                                                <p className="font-medium" style={{color: primaryColor}}>
                                                                    Welcome to our Thurgood Marshall School Store
                                                                </p>
                                                                <h1 className="text-5xl font-extrabold leading-tight" style={{color: primaryColor}}>
                                                                    Gear is <br /> Now Available!
                                                                </h1>
                                                                <Button
                                                                className={`mt-5 bg-black text-white text-sm font-semibold px-6 py-3 rounded-none hover:bg-[var(--hoverColor)]`}
                                                                >
                                                                    SHOP NOW
                                                                </Button>
                                                            </div>

                                                            {/* Right Image Section */}
                                                            <div className="flex-1 flex justify-center mt-10 md:mt-0 z-10">
                                                                <div className="flex gap-6 items-end">
                                                                <Image
                                                                    src="/images/hero.png"
                                                                    alt="Girl model"
                                                                    width={400}
                                                                    height={350}
                                                                    className="object-contain"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Decorative Stripes */}
                                                        <div className={`absolute bottom-0 left-0 w-15 h-15 md:w-40 md:h-40 bg-[repeating-linear-gradient(45deg, ${primaryColor}, ${primaryColor}_5px,transparent_5px,transparent_10px)] opacity-60`}></div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="flex justify-between">
                                                <CardTitle className="text-xl">Generating Theme</CardTitle>
                                                <CardTitle className="text-xl">{progress}%</CardTitle>                                
                                            </div>
                                            <div className="mt-3 theme-generate">
                                                <Progress value={progress} className={`w-[{${progress}}%]`} />
                                            </div>
                                        </div>
                                    </Card>
                                    <Button className="mt-5 w-full"><Download />Export Theme</Button>
                                </CardContent>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
        </div>
    )
}
