import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import footerImage from "@/public/footerPic2.png"

export default function FullScreenMenu() {
    return (
        <>

            <Dialog className="p-0">
                <DialogTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </DialogTrigger>

                {/* <div className="w-11/12 mx-auto"> */}
                {/* <DialogTitle>&nbsp;</DialogTitle> */}
                <DialogContent className="lg:pt-18 mx-auto !max-w-full h-full bg-[#4738213b] backdrop-blur-3xl text-amber-50 border-none">

                    <Tabs defaultValue="practice" orientation="vertical" className="grid grid-cols-9 gap-4">

                        {/* Sidebar Tabs */}
                        <div className="flex col-span-2 relative">
                            <TabsList className="table grow-1 py-6" orientation="vertical">
                                <TabsTrigger
                                    value="practice"
                                    className="py-2 w-full text-xl text-left block  text-[#b7945e] 
                    hover:bg-[#b7935e23] hover:text-amber-50 
                    data-[state=active]:bg-[#b6935d] data-[state=active]:text-amber-50"
                                >
                                    Practices
                                </TabsTrigger>
                                <TabsTrigger
                                    value="sectors"
                                    className="py-2 w-full text-xl text-left block  text-[#b7945e] 
                    hover:bg-[#b7935e23] hover:text-amber-50 
                    data-[state=active]:bg-[#b6935d] data-[state=active]:text-amber-50"
                                >
                                    Sectors
                                </TabsTrigger>
                                <TabsTrigger
                                    value="lawyers"
                                    className="py-2 w-full text-xl text-left block  text-[#b7945e] 
                    hover:bg-[#b7935e23] hover:text-amber-50 
                    data-[state=active]:bg-[#b6935d] data-[state=active]:text-amber-50"
                                >
                                    Lawyers
                                </TabsTrigger>
                                <TabsTrigger
                                    value="client-services"
                                    className="py-2 w-full text-xl text-left block  text-[#b7945e] 
                    hover:bg-[#b7935e23] hover:text-amber-50 
                    data-[state=active]:bg-[#b6935d] data-[state=active]:text-amber-50"
                                >
                                    Client Services
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Content Area */}
                        <div className="col-span-7 px-6 py-6 border border-[#fffbeb45] rounded-md">
                            <TabsContent value="practice" className="h-full">
                                <p className="mb-8 lg:w-3/4 lg:text-xl">
                                    With over three decades of collective legal experience, we work for one simple purpose: our clients’ success.
                                    We take a distinctive approach that is uniquely broad and deep in scope.
                                    Our partners and lawyers work together across our offices and practice areas to produce innovative solutions
                                    for our clients in the Middle East and North Africa and around the world.
                                </p>
                                <div className="flex gap-18 text-sm">
                                    <div className="flex flex-col gap-5 lg:text-[18px]">
                                        <div>Arbitration</div>
                                        <div>Corporate Structuring</div>
                                        <div>Intellectual Property</div>
                                        <div>Projects</div>
                                        <div>Practices</div>
                                        <div>Banking & Finance</div>
                                        <div>Digital & Data</div>
                                        <div>International Litigation</div>
                                        <div>Real Estate</div>
                                    </div>
                                    <Separator orientation="vertical" className="h-full " />
                                    <div className="flex flex-col gap-5 border-l pl-6 lg:text-[18px]">
                                        <div>Capital Markets</div>
                                        <div>Dispute Resolution </div>
                                        <div>Legislative Drafting</div>
                                        <div>Shipping. Aviation & Logistics</div>
                                        <div>Sectors</div>
                                        <div>Commercial</div>
                                        <div>Employment</div>
                                        <div>Litigation</div>
                                        <div>Competition</div>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex flex-col gap-5 border-l pl-6 lg:text-[18px]">
                                        <div>Family Business & Private Wealth</div>
                                        <div>Mediation</div>
                                        <div>Regulatory</div>
                                        <div>Country Groups </div>
                                        <div>Construction & Infrastructure</div>
                                        <div>Innovation, Patents & Industrial Property (3IP)</div>
                                        <div>Private Client Services</div>
                                        <div>Tax</div>
                                        <div>Corporate / Mergers & Acquisitions</div>
                                    </div>
                                </div>

                            </TabsContent>
                            <TabsContent value="sectors">
                                <p>Change your password here.</p>
                            </TabsContent>
                            <TabsContent value="lawyers">
                                <p>Lawyers content.</p>
                            </TabsContent>
                            <TabsContent value="client-services">
                                <p>Client Services content.</p>
                            </TabsContent>
                        </div>
                    </Tabs>
                    <div className="relative self-end">
                        <Image src={footerImage} className="contain" alt="footer image for this page" />
                    </div>
                </DialogContent>
                {/* </div> */}
            </Dialog>

        </>
    );
}
