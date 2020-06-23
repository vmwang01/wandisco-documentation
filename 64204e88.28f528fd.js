(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),i=(a(0),a(250)),o={id:"azure_vm_creation",title:"Creating an Azure Linux Virtual Machine for a Fusion installation",sidebar_label:"Azure VM Creation"},c={id:"quickstarts/preparation/azure_vm_creation",isDocsHomePage:!1,title:"Creating an Azure Linux Virtual Machine for a Fusion installation",description:"This quickstart helps you create an Azure Linux Virtual Machine (VM) suitable for a Fusion installation. It walks you through:",source:"@site/../docs/quickstarts/preparation/azure_vm_creation.md",permalink:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation",sidebar_label:"Azure VM Creation",sidebar:"quickstarts",previous:{title:"Creating an Amazon Web Services Linux VM for a Fusion installation",permalink:"/wandisco-documentation/docs/quickstarts/preparation/aws_vm_creation"},next:{title:"Preparing a Virtual Machine for a Fusion installation",permalink:"/wandisco-documentation/docs/quickstarts/preparation/vm_prep"}},s=[{value:"Using the Azure portal",id:"using-the-azure-portal",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"SSH keys",id:"ssh-keys",children:[]}]},{value:"Download the cloud-init template",id:"download-the-cloud-init-template",children:[]},{value:"Required parameters",id:"required-parameters",children:[{value:"Optional parameters",id:"optional-parameters",children:[]}]},{value:"Create the VM",id:"create-the-vm",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This quickstart helps you create an Azure Linux Virtual Machine (VM) suitable for a Fusion installation. It walks you through:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Downloading a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"}),"cloud-init")," template to initialise the VM and install required services."),Object(i.b)("li",{parentName:"ul"},"Obtaining ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az-vm-create"}),"Azure parameters")," to create the VM."),Object(i.b)("li",{parentName:"ul"},"Creating the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/create-cli-complete"}),"Linux VM with the Azure CLI"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Logging in to the VM for the first time.")))),Object(i.b)("p",null,"This is an alternative to using the Azure portal to create a VM. If you prefer to use the portal, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#using-the-azure-portal"}),"Using the Azure portal")," section below for an outline of what you will need."),Object(i.b)("h2",{id:"using-the-azure-portal"},"Using the Azure portal"),Object(i.b)("p",null,"If you want to use the Azure portal instead of following this guide, then you will need to ensure that you have suitable resources available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://azure.microsoft.com/"}),"Azure subscription")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"}),"Resource group")," to contain the Azure VM."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"}),"VNet/Subnet")," for your chosen Azure region.")),Object(i.b)("p",null,"The VM will also need to meet certain specifications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recommended Operating System = ",Object(i.b)("strong",{parentName:"li"},"Ubuntu 18.04 LTS"),"."),Object(i.b)("li",{parentName:"ul"},"Minimum size recommendation = ",Object(i.b)("strong",{parentName:"li"},"8 vcpus, 32 GiB memory")," (e.g. ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/dv3-dsv3-series#dsv3-series"}),"Standard D8s v3"),")."),Object(i.b)("li",{parentName:"ul"},"Minimum disk space for Operating System (OS) = ",Object(i.b)("strong",{parentName:"li"},"32 GB"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If creating your VM through the Azure portal (and not via our ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation"}),"guide"),"), you may have insufficient disk space by default. See the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/expand-os-disk"}),"Microsoft docs")," for further info."),Object(i.b)("li",{parentName:"ul"},"The use of ephemeral OS disks are not recommended as data may not be persisted after shutting down the VM.")))),Object(i.b)("p",null,"Once you have created the VM, see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/preparation/vm_prep"}),"VM Preparation guide")," for help installing the required services."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"}),"Azure CLI")," with the ability to run ",Object(i.b)("inlineCode",{parentName:"li"},"az login")," on your terminal.")),Object(i.b)("h3",{id:"ssh-keys"},"SSH keys"),Object(i.b)("p",null,"There is an option to use SSH keys as part of the VM creation process. See the Microsoft documentation for further details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys"}),"Linux or macOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows"}),"Windows"))),Object(i.b)("h2",{id:"download-the-cloud-init-template"},"Download the cloud-init template"),Object(i.b)("p",null,"Save this file to the same location you will run the Azure CLI:"),Object(i.b)("a",{id:"cloud-init.txt",href:"https://github.com/WANdisco/wandisco-documentation/raw/master/docs/assets/cloud-init.txt"},"cloud-init.txt"),Object(i.b)("p",null,"The template contains initialization parameters for the VM, and pre-installs the required services."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This file has been configured to work with an UbuntuLTS image.")),Object(i.b)("h2",{id:"required-parameters"},"Required parameters"),Object(i.b)("p",null,"The variables required to create a suitable VM are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The name for the VM (user defined)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--name docker_host01"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-list"}),"Azure Resource group")," to use for the VM. ",Object(i.b)("em",{parentName:"p"},"Must already exist"),"."),Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," value from ",Object(i.b)("inlineCode",{parentName:"p"},"az group list --output table"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--resource-group GRP-my.name1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The admin username to log in to the VM with (user defined)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--admin-username vm_user"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The VM size from the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes"}),"Azure templates"),"."),Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," value from ",Object(i.b)("inlineCode",{parentName:"p"},"az vm list-sizes --location <vm-location> --output table"),"."),Object(i.b)("p",{parentName:"li"},"If you are intending to replicate large amounts of data (e.g. over 10GB), use a greater VM size."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--size Standard_D8s_v3"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The storage ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/rest/api/storagerp/srp_sku_types"}),"SKU type")," to use."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--storage-sku Standard_LRS"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/vm/image?view=azure-cli-latest#az-vm-image-list"}),"image (operating system)"),"."),Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"UbuntuLTS")," image to ensure compatibility with the cloud-init template."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--image UbuntuLTS"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The operating system's disk size (in GB)."),Object(i.b)("p",{parentName:"li"},"We recommend a minimum of 32 GB as the ",Object(i.b)("inlineCode",{parentName:"p"},"/var/lib/docker")," directory will need to store large images."),Object(i.b)("p",{parentName:"li"},"If you are intending to replicate large amounts of data (e.g. over 10GB), increase this value accordingly."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--os-disk-size-gb 32"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The authentication type when logging in to the VM."),Object(i.b)("p",{parentName:"li"},"You can choose an admin password or your local SSH public key, or you can choose both."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"li"},"--authentication-type ssh --ssh-key-values ~/.ssh/id_rsa.pub")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"li"},"--authentication-type password --admin-password mypassword")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"li"},"--authentication-type all --ssh-key-values ~/.ssh/id_rsa.pub --admin-password mypassword"))),Object(i.b)("p",{parentName:"li"},"Alternatively, choose to generate SSH keys for the VM."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"li"},"--authentication-type ssh --generate-ssh-keys")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"li"},"--authentication-type all --generate-ssh-keys --admin-password mypassword"))),Object(i.b)("p",{parentName:"li"},"See the links in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#ssh-keys"}),"SSH keys")," section for more info.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/network/vnet/subnet?view=azure-cli-latest#az-network-vnet-subnet-list"}),"subnet ID")," to use for the VM."),Object(i.b)("p",{parentName:"li"},"You first need a virtual network (VNet) and its subnet name. Using these, you can get the subnet ID."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To get a list of VNets available to your account, use:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"az resource list --location <vm-location> --query \"[?type=='Microsoft.Network/virtualNetworks'].{VNetName:name, ResourceGroup:resourceGroup}\" --output table"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("strong",{parentName:"p"},"VNetName")," and ",Object(i.b)("strong",{parentName:"p"},"ResourceGroup")," can then be used to list your VNet subnets:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"az network vnet subnet list --vnet-name <vnet-name> -g <vnet-resource-group> --output table")),Object(i.b)("p",{parentName:"li"},"The subnet names are listed in the ",Object(i.b)("strong",{parentName:"p"},"Name")," column.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now get the subnet ID by using the ",Object(i.b)("strong",{parentName:"p"},"VNetName"),", ",Object(i.b)("strong",{parentName:"p"},"ResourceGroup")," and subnet ",Object(i.b)("strong",{parentName:"p"},"Name")," in the following command:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"az network vnet subnet show --vnet-name <vnet-name> -g <vnet-resource-group> -n <subnet-name>  --output tsv --query 'id'")),Object(i.b)("p",{parentName:"li"},"Use the output of this last step for the subnet parameter."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:"),"  ",Object(i.b)("inlineCode",{parentName:"p"},"--subnet /subscriptions/3842fefa-8901-4e7d-c789-a5a3ae567890/resourceGroups/GRP/providers/Microsoft.Network/virtualNetworks/GRP-westeurope-vnet/subnets/default")))))),Object(i.b)("h3",{id:"optional-parameters"},"Optional parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/account?view=azure-cli-latest#az-account-list-locations"}),"Azure location")," for the VM."),Object(i.b)("p",{parentName:"li"},"The location will default to the Azure resource group you have selected for the VM. You can change it with this parameter."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},"--location westeurope"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use a private IP address for the VM."),Object(i.b)("p",{parentName:"li"},"Prevent a public IP address from being generated by setting the parameter value to none."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example:")," ",Object(i.b)("inlineCode",{parentName:"p"},'--public-ip-address ""')))),Object(i.b)("h2",{id:"create-the-vm"},"Create the VM"),Object(i.b)("p",null,"Create the VM using the information collected above. You must also include the ",Object(i.b)("inlineCode",{parentName:"p"},"--custom-data")," parameter to reference the ",Object(i.b)("inlineCode",{parentName:"p"},"cloud-init.txt")," template created earlier."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example usage")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'az vm create \\\n--custom-data cloud-init.txt \\\n--name docker_host01 \\\n--resource-group GRP-my.name1 \\\n--admin-username vm_user \\\n--size Standard_D8s_v3 \\\n--storage-sku Standard_LRS \\\n--image UbuntuLTS \\\n--os-disk-size-gb 32 \\\n--authentication-type ssh --ssh-key-values ~/.ssh/id_rsa.pub \\\n--subnet /subscriptions/3842fefa-8901-4e7d-c789-a5a3ae567890/resourceGroups/GRP/providers/Microsoft.Network/virtualNetworks/GRP-westeurope-vnet/subnets/default \\\n--location westeurope \\\n--public-ip-address ""\n')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example output")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fqdns": "",\n  "id": "/subscriptions/3842fefa-8901-4e7d-c789-a5a3ae567890/resourceGroups/GRP-my.name4/providers/Microsoft.Compute/virtualMachines/docker_host01",\n  "location": "westeurope",\n  "macAddress": "00-0D-3A-A8-71-A6",\n  "powerState": "VM running",\n  "privateIpAddress": "172.10.1.10",\n  "publicIpAddress": "",\n  "resourceGroup": "GRP-my.name4",\n  "zones": ""\n}\n')),Object(i.b)("p",null,"You can now log in to your Azure VM, for example ",Object(i.b)("inlineCode",{parentName:"p"},"ssh vm_user@172.10.1.10"),"."),Object(i.b)("p",null,"If you are unable to log in to your VM, you may need admin asssitance with your network configuration. See our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting#unable-to-access-ambari-cloudera-or-fusion-ui-on-vm"}),"Azure specific troubleshooting")," section for more detail."),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az-vm-create"}),"Azure parameters for VM creation"))))}p.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);