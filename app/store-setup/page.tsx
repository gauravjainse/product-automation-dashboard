"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Field } from "@/components/ui/field";
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
import { Circle, CircleCheck, Currency, GraduationCap, Heart, Minus, Plus, School, Search, ShoppingBag, UploadCloud, User, X } from "lucide-react";

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
    const [searchValue, setSearchValue] = useState("");
    const [primaryColor, setPrimaryColor] = useState("#c559ff");
    const [secondaryColor, setSecondaryColor] = useState('#5a00ce');
    const [naturalColors, setNaturalColors] = useState([
        "#000000",
        "#FFFFFF",
        "#979797",
        "#333333",
        "#5d5d5d",
    ]);

    const isPrimaryDark = Color(primaryColor).isDark();
    const isSecondaryDark = Color(secondaryColor).isDark();

    const storeLogoRef = useRef<HTMLInputElement | null>(null);
    const productLogoRef = useRef<HTMLInputElement | null>(null);
    
    const [storeLogoFile, setStoreLogoFile] = useState<File | null>(null);
    const [productLogoFile, setProductLogoFile] = useState<File | null>(null);

    const [storeLogoPreview, setStoreLogoPreview] = useState<string | null>(null);
    const [productLogoPreview, setProductLogoPreview] = useState<string | null>(null);

    const handleSearch = (selectedVal: string) => {
        setSearchValue(selectedVal)

        console.log('Search Value', selectedVal);
    }

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>, logoType:string) => {
        const selectedFile = event.target.files?.[0];

        console.log('selectedFile', selectedFile)
        console.log('logoType', logoType)

        if(selectedFile) {
            if (logoType == 'store'){
                setStoreLogoFile(selectedFile)
                setStoreLogoPreview(URL.createObjectURL(selectedFile));
                // console.log('SelectedFile', selectedFile)
            } else {
                setProductLogoFile(selectedFile)
                setProductLogoPreview(URL.createObjectURL(selectedFile));
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
            setProductLogoFile(null);
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
  
    return (
        <div>
            <div className="mt-10">
                <Card className="">
                    <CardHeader className="flex justify-between">
                        <CardTitle className="text-2xl">Step 1: Store Connect   </CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardHeader>
                        <CardTitle className="text-xl">Search Store</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                </Card> 
            </div>

            <div className="mt-10">
                <Card className="">
                    <CardHeader className="flex justify-between">
                        <CardTitle className="text-2xl">Step 2: Store Logo   </CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardHeader>
                        <CardTitle className="text-xl">Upload Store Logo</CardTitle>
                    </CardHeader>
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
                                <CardTitle className="text-xl">Primary Color</CardTitle>
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
                                <CardTitle className="text-xl">Secondary Color</CardTitle>
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
                                <CardTitle className="text-xl">Natural Color</CardTitle>
                                <div className="flex gap-5 mt-5 flex-col">
                                    <div className="flex-col flex gap-3">
                                        {naturalColors.map((naturalColor)=>(
                                            <div className="flex gap-2 items-center">
                                                <div className="flex gap-3 p-1 w-full items-center text-black dark:bg-gray-200 border rounded-sm">
                                                    <span className="w-8 block h-7 rounded" style={{backgroundColor: naturalColor}}></span>
                                                    <ColorPicker
                                                    className="w-full amicolor-natural-picker flex-row"
                                                    onChange={(rgba: number[]) => {
                                                        const [r, g, b, a] = rgba;
                                                        const hex = Color.rgb(r, g, b).hex();
                                                        // setNaturalColors(naturalColor);
                                                    }}
                                                >
                                                    <ColorPickerOutput />
                                                    <ColorPickerFormat />
                                                </ColorPicker>
                                                </div>
                                                <Minus className="cursor-pointer" />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Button className="mt-3">Add more color <Plus /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card> 
            </div>

            <div className="mt-10">
                <Card className="">
                <CardHeader className="flex justify-between">
                    <CardTitle className="text-2xl">Step 3: Upload Product Logo</CardTitle>
                </CardHeader>
                <Separator />
                <CardHeader>
                    <CardTitle className="text-xl">Upload Store Logo</CardTitle>
                </CardHeader>
                <CardContent>
                    <div 
                        className="amicolor-upload h-50 border-2 border-dashed flex justify-center rounded-lg p-6 transition-all text-center items-center"
                        onClick={()=>productLogoRef.current?.click()}
                    >
                        <input ref={productLogoRef} onChange={(e)=>handleLogoChange(e, 'product')} type="file" accept="image/png, image/jpeg, image/jpg, image/webp" className="hidden" />
                        
                        {productLogoPreview ? (
                            <div className="relative w-full h-48 flex items-center justify-center">
                                <Image
                                src={productLogoPreview}
                                alt="Logo Preview"
                                fill
                                className="object-contain rounded-md"
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLogoRemove('product');
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
                </CardContent>
                </Card> 
            </div>

            <div className="mt-10">
                <Card className="">
                <CardHeader className="flex justify-between">
                    <CardTitle className="text-2xl">Step 4: Product Sync</CardTitle>
                </CardHeader>
                <Separator />
                <CardHeader>
                    <CardTitle className="text-xl">Product Sync</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center flex-col">
                        {/* <ProductSyncProgress value={progress} total={100} label="Product syncing in Progress" /> */}

                        <div className="mt-5 flex w-full md:w-4/5 h-100">
                            <div className="p-5 border rounded w-3/5">
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
                </Card> 
            </div>

            <div className="mt-10">
                <Card className="">
                <CardHeader className="flex justify-between">
                    <CardTitle className="text-2xl">Step 5: Preparing theme</CardTitle>
                </CardHeader>
                <Separator />
                <CardHeader>
                    <CardTitle className="text-xl">Preparing Theme</CardTitle>
                </CardHeader>
                <CardContent>
                    <Card className="p-5">
                        <div className="bg-gray-200 w-full flex justify-center w-full p-5 md:p-10 rounded-2xl">
                            <div className="flex flex-col md:w-5/6 w-full">
                                {/* 🔹 Top Announcement Bar */}
                                <div className="bg-[#6A0027] text-white text-center py-2 text-sm font-semibold">
                                    $5 Dollar Shipping On All Orders!
                                </div>

                                {/* 🔹 Navbar */}
                                <header className="bg-white border-b">
                                    <div className="container mx-auto flex items-center justify-between py-2 px-6">
                                    {/* Logo */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                        src="/images/store-logo.webp"
                                        alt="Marshall School Store"
                                        width={200}
                                        height={75}
                                        />
                                    </div>

                                    {/* Nav Links */}
                                    <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                                        <a href="#" className="hover:text-[#6A0027]">MEN</a>
                                        <a href="#" className="hover:text-[#6A0027]">WOMEN</a>
                                        <a href="#" className="hover:text-[#6A0027]">YOUTH</a>
                                        <a href="#" className="hover:text-[#6A0027]">UNISEX</a>
                                        <a href="#" className="hover:text-[#6A0027]">ACCESSORIES</a>
                                    </nav>

                                    {/* Icons */}
                                    <div className="flex items-center gap-4 text-gray-700">
                                        <Search size={20} className="cursor-pointer hover:text-[#6A0027]" />
                                        <User size={20} className="cursor-pointer hover:text-[#6A0027]" />
                                        <Heart size={20} className="cursor-pointer hover:text-[#6A0027]" />
                                        <div className="relative">
                                        <ShoppingBag size={20} className="cursor-pointer hover:text-[#6A0027]" />
                                        <span className="absolute -top-2 -right-2 text-[10px] bg-[#6A0027] text-white rounded-full px-1.5 py-0.5">0</span>
                                        </div>
                                    </div>
                                    </div>
                                </header>

                                {/* 🔹 Hero Section */}
                                <section className="relative bg-gradient-to-r from-white to-gray-100 overflow-hidden">
                                    <div className="container mx-auto px-6 pt-5 flex flex-col md:flex-row items-center">
                                        {/* Left Text Section */}
                                        <div className="flex-1 space-y-6 text-center z-10">
                                            <p className="text-[#6A0027] font-medium">
                                                Welcome to our Thurgood Marshall School Store
                                            </p>
                                            <h1 className="text-5xl font-extrabold text-[#6A0027] leading-tight">
                                                Gear is <br /> Now Available!
                                            </h1>
                                            <Button
                                            className="bg-black hover:bg-[#6A0027] text-white text-sm font-semibold px-6 py-3 rounded-none"
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
                                    <div className="absolute bottom-0 left-0 w-15 h-15 md:w-40 md:h-40 bg-[repeating-linear-gradient(45deg,#6A0027,#6A0027_5px,transparent_5px,transparent_10px)] opacity-60"></div>
                                </section>
                            </div>
                        </div>
                    </Card>
                </CardContent>
                </Card> 
            </div>
        </div>
    )
}
