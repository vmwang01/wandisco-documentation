(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(250)),o={id:"hdp_sandbox_lhv_client-adlsg2_lan",title:"Hortonworks (HDP) Sandbox to Azure Databricks with LiveAnalytics",sidebar_label:"HDP Sandbox to Azure Databricks with LiveAnalytics"},b={id:"quickstarts/installation/hdp_sandbox_lhv_client-adlsg2_lan",isDocsHomePage:!1,title:"Hortonworks (HDP) Sandbox to Azure Databricks with LiveAnalytics",description:"Use this quickstart if you want to configure Fusion to replicate from a non-kerberized Hortonworks (HDP) Sandbox to an Azure Databricks cluster.",source:"@site/../docs/quickstarts/installation/hdp_sandbox_lhv_client-adlsg2_lan.md",permalink:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_lhv_client-adlsg2_lan",sidebar_label:"HDP Sandbox to Azure Databricks with LiveAnalytics",sidebar:"quickstarts",previous:{title:"Hortonworks (HDP) Sandbox to ADLS Gen2 with LiveData",permalink:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_adlsg2_ld"},next:{title:"Hortonworks (HDP) Sandbox to AWS S3 with LiveMigrator",permalink:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox-s3_lm"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Info you will require",id:"info-you-will-require",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Setup Fusion",id:"setup-fusion",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Check HDP services are started",id:"check-hdp-services-are-started",children:[]},{value:"Configure the ADLS Gen2 storage",id:"configure-the-adls-gen2-storage",children:[]},{value:"Configure Fusion Plugin for Databricks Delta Lake",id:"configure-fusion-plugin-for-databricks-delta-lake",children:[]}]},{value:"Replication",id:"replication",children:[{value:"Create replication rules",id:"create-replication-rules",children:[]},{value:"Test HCFS replication",id:"test-hcfs-replication",children:[]},{value:"Test Hive replication",id:"test-hive-replication",children:[]},{value:"Setup Databricks Notebook to view data",id:"setup-databricks-notebook-to-view-data",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use this quickstart if you want to configure Fusion to replicate from a non-kerberized Hortonworks (HDP) Sandbox to an Azure Databricks cluster."),Object(i.b)("p",null,"This uses the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wandisco.com/products/live-analytics"}),"WANdisco LiveAnalytics")," solution, comprising both the Fusion Plugin for Databricks Delta Lake and Live Hive."),Object(i.b)("p",null,"What this guide will cover:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installing WANdisco Fusion and a HDP Sandbox using the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker-compose")," tool."),Object(i.b)("li",{parentName:"ul"},"Integrating WANdisco Fusion with Azure Databricks."),Object(i.b)("li",{parentName:"ul"},"Live replication of sample data and Hive metadata.")),Object(i.b)("p",null,"If you would like to try something different with the HDP Sandbox, see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_adlsg2_lm"}),"Migration of data to ADLS Gen2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_adlsg2_ld"}),"Live replication of data to ADLS Gen2"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"For info on how to create a suitable VM with all services installed, see our ",Object(i.b)("a",Object(n.a)({parentName:"th"},{href:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation"}),"Azure VM creation")," guide. See our ",Object(i.b)("a",Object(n.a)({parentName:"th"},{href:"/wandisco-documentation/docs/quickstarts/preparation/vm_prep"}),"VM Preparation")," guide for how to install the services only."))),Object(i.b)("tbody",{parentName:"table"})),Object(i.b)("p",null,"To complete this install, you will need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ADLS Gen2 storage account with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-namespace"}),"hierarchical namespace")," enabled."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You will also need a container created inside this account."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Azure Databricks cluster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Azure Virtual Machine (VM)."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Minimum size recommendation = ",Object(i.b)("strong",{parentName:"li"},"8 vcpus, 32 GiB memory")," (e.g. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/dv3-dsv3-series#dsv3-series"}),"Standard D8s v3"),")."),Object(i.b)("li",{parentName:"ul"},"A minimum of 24GB available storage for the ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/docker")," directory.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If creating your VM through the Azure portal (and not via our ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation"}),"guide"),"), you may have insufficient disk space by default. See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/expand-os-disk"}),"Microsoft docs")," for further info."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The following services must be installed on the VM:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")," (v19.03.5 or higher)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"Docker Compose for Linux")," (v1.25.0 or higher)")))),Object(i.b)("h3",{id:"info-you-will-require"},"Info you will require"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ADLS Gen2 storage account details:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal#create-a-storage-account"}),"Account name")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"adlsg2storage"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container"}),"Container name")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"fusionreplication"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage#view-access-keys-and-connection-string"}),"Access key")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"eTFdESnXOuG2qoUrqlDyCL+e6456789opasweghtfFMKAHjJg5JkCG8t1h2U1BzXvBwtYfoj5nZaDF87UK09po=="),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Credentials for your Azure Databricks cluster:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.databricks.com/workspace/workspace-details.html#workspace-instance-and-id"}),"Databricks Service Address (Instance name)")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"westeurope.azuredatabricks.net"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"As of April 16th 2020, the URL scheme for a new Databricks Workspace will have a format of ",Object(i.b)("inlineCode",{parentName:"li"},"adb-<workspace-id>.<random>.azuredatabricks.net"),". The URL format for existing Workspaces will stay the same."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.databricks.com/dev-tools/api/latest/authentication.html#generate-a-token"}),"Bearer Token")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"dapibe21cfg45efae945t6f0b57dfd1dffb4"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.databricks.com/workspace/workspace-details.html#cluster-url"}),"Databricks Cluster ID")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"0234-125567-cowls978"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.databricks.com/bi/jdbc-odbc-bi.html#construct-the-jdbc-url"}),"JDBC/ODBC HTTP path")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"sql/protocolv1/o/8445611090456789/0234-125567-cowls978"),")")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"These instructions have been tested on Ubuntu LTS.")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Log in to your VM prior to starting these steps."),Object(i.b)("h3",{id:"setup-fusion"},"Setup Fusion"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the Fusion docker repository to your Azure VM instance:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"git clone https://github.com/WANdisco/fusion-docker-compose.git"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change to the repository directory:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd fusion-docker-compose"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the setup script:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./setup-env.sh"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose the ",Object(i.b)("inlineCode",{parentName:"p"},"HDP Sandbox to ADLS Gen2, Live Hive and Databricks integration")," option when prompted.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You have now completed the setup, to create and start your containers run:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("p",{parentName:"li"},"Docker will now download all required images and create the containers."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"check-hdp-services-are-started"},"Check HDP services are started"),Object(i.b)("p",null,"The HDP sandbox services can take up to 5-10 minutes to start. To check that the HDFS service is started:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to Ambari via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8080")),Object(i.b)("p",{parentName:"li"},"Username: ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),"\nPassword: ",Object(i.b)("inlineCode",{parentName:"p"},"admin"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("strong",{parentName:"p"},"HDFS")," service.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Wait until all the HDFS components are showing as ",Object(i.b)("strong",{parentName:"p"},"Started"),"."))),Object(i.b)("h3",{id:"configure-the-adls-gen2-storage"},"Configure the ADLS Gen2 storage"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to Fusion via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8081")),Object(i.b)("p",{parentName:"li"},"Enter your email address and choose a password you will remember.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Settings")," cog for the ",Object(i.b)("strong",{parentName:"p"},"ADLS GEN2")," storage, and fill in the details for your ADLS Gen2 storage account. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#info-you-will-require"}),"Info you will require")," section for reference.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the ",Object(i.b)("strong",{parentName:"p"},"Use Secure Protocol")," box.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Apply Configuration")," and wait for this to complete."))),Object(i.b)("h3",{id:"configure-fusion-plugin-for-databricks-delta-lake"},"Configure Fusion Plugin for Databricks Delta Lake"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Settings")," cog in the ",Object(i.b)("strong",{parentName:"p"},"ADLS GEN2")," storage, and fill in the details for your Databricks cluster. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#info-you-will-require"}),"Info you will require")," section for reference.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Activate")," and wait for the status to show as ",Object(i.b)("strong",{parentName:"p"},"Active")," before continuing."))),Object(i.b)("h2",{id:"replication"},"Replication"),Object(i.b)("p",null,"Follow the steps below to demonstrate live replication of HCFS data and Hive metadata from the HDP sandbox to the Azure Databricks cluster."),Object(i.b)("h3",{id:"create-replication-rules"},"Create replication rules"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the dashboard, create a ",Object(i.b)("strong",{parentName:"p"},"HCFS")," rule with the following parameters:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Rule Name = ",Object(i.b)("inlineCode",{parentName:"li"},"warehouse")),Object(i.b)("li",{parentName:"ul"},"Path for all storages = ",Object(i.b)("inlineCode",{parentName:"li"},"/apps/hive/warehouse")),Object(i.b)("li",{parentName:"ul"},"Default exclusions"),Object(i.b)("li",{parentName:"ul"},"Preserve HCFS Block Size = ",Object(i.b)("em",{parentName:"li"},"True")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now create a ",Object(i.b)("strong",{parentName:"p"},"Hive")," rule with the following parameters:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Rule Name = ",Object(i.b)("inlineCode",{parentName:"li"},"Demo")),Object(i.b)("li",{parentName:"ul"},"Pattern to match database names = ",Object(i.b)("inlineCode",{parentName:"li"},"databricks_demo")),Object(i.b)("li",{parentName:"ul"},"Pattern to match table names = ",Object(i.b)("inlineCode",{parentName:"li"},"*"))),Object(i.b)("p",{parentName:"li"},"Both rules will now be displayed."))),Object(i.b)("h3",{id:"test-hcfs-replication"},"Test HCFS replication"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to ",Object(i.b)("strong",{parentName:"p"},"Hue")," via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8000")),Object(i.b)("p",{parentName:"li"},"Username: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"),"\nPassword: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Menu")," -> ",Object(i.b)("strong",{parentName:"p"},"Files"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move to ",Object(i.b)("inlineCode",{parentName:"p"},"/apps/hive/warehouse")," path and ",Object(i.b)("strong",{parentName:"p"},"Upload")," any file from your host machine.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check that the file you uploaded is now located in your ",Object(i.b)("inlineCode",{parentName:"p"},"/apps/hive/warehouse")," directory on your ADLS Gen2 container."))),Object(i.b)("h4",{id:"test-large-data-sets-optional"},"Test large data sets (optional)"),Object(i.b)("p",null,"If you want to replicate larger amounts of data, see our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/testing/test_hdp_sandbox"}),"HDP Sandbox testing")," guide."),Object(i.b)("h4",{id:"test-large-data-sets-optional-1"},"Test large data sets (optional)"),Object(i.b)("p",null,"If you want to replicate larger amounts of data, see our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/testing/test_hdp_sandbox"}),"HDP Sandbox testing")," guide."),Object(i.b)("h3",{id:"test-hive-replication"},"Test Hive replication"),Object(i.b)("p",null,"Your Databricks cluster must be ",Object(i.b)("strong",{parentName:"p"},"running")," before testing Hive replication. Sample data is provided in this HDP Sandbox."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to ",Object(i.b)("strong",{parentName:"p"},"Hue")," via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8000")),Object(i.b)("p",{parentName:"li"},"Username: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"),"\nPassword: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To create a database for the sample data, add the query below inside the ",Object(i.b)("strong",{parentName:"p"},"Hive")," box and click the ",Object(i.b)("strong",{parentName:"p"},"play")," button:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CREATE DATABASE IF NOT EXISTS retail_demo;"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a table inside the database that points to the sample data, add the query below inside the ",Object(i.b)("strong",{parentName:"p"},"Hive")," box and click the ",Object(i.b)("strong",{parentName:"p"},"play")," button:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE retail_demo.customer_addresses_dim_hive\n(\nCustomer_Address_ID  bigint,\nCustomer_ID          bigint,\nValid_From_Timestamp timestamp,\nValid_To_Timestamp   timestamp,\nHouse_Number         string,\nStreet_Name          string,\nAppt_Suite_No        string,\nCity                 string,\nState_Code           string,\nZip_Code             string,\nZip_Plus_Four        string,\nCountry              string,\nPhone_Number         string\n)\nROW FORMAT DELIMITED FIELDS TERMINATED BY '\\t'\nSTORED AS TEXTFILE\nLOCATION '/retail_demo/customer_addresses_dim_hive/';\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a second database matching the Database name in the Hive replication rule created earlier:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CREATE DATABASE IF NOT EXISTS databricks_demo;"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a table inside this second database:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE databricks_demo.customer_addresses_dim_hive\n(\nCustomer_Address_ID  bigint,\nCustomer_ID          bigint,\nValid_From_Timestamp timestamp,\nValid_To_Timestamp   timestamp,\nHouse_Number         string,\nStreet_Name          string,\nAppt_Suite_No        string,\nCity                 string,\nState_Code           string,\nZip_Code             string,\nZip_Plus_Four        string,\nCountry              string,\nPhone_Number         string\n)\nstored as ORC;\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now insert data into the table:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"INSERT INTO databricks_demo.customer_addresses_dim_hive SELECT * FROM retail_demo.customer_addresses_dim_hive WHERE state_code = 'CA';")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"The data will take a couple of minutes to be replicated and appear in the Databricks cluster. This is because during the first transfer of Hive data, the Datatransformer jar (",Object(i.b)("inlineCode",{parentName:"em"},"etl.jar"),") will also be installed in the Databricks library."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A Hive job will launch that inserts the data values provided in this example.\nSelect the ",Object(i.b)("strong",{parentName:"p"},"jobs")," service. If successful, the STATUS will be ",Object(i.b)("strong",{parentName:"p"},"SUCCEEDED"),"."))),Object(i.b)("h3",{id:"setup-databricks-notebook-to-view-data"},"Setup Databricks Notebook to view data"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.databricks.com/notebooks/notebooks-manage.html#create-a-notebook"}),"Cluster Notebook")," with the details:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("strong",{parentName:"li"},"WD-demo")),Object(i.b)("li",{parentName:"ul"},"Language: ",Object(i.b)("strong",{parentName:"li"},"SQL")),Object(i.b)("li",{parentName:"ul"},"Cluster: (Choose your cluster)")),Object(i.b)("p",{parentName:"li"},"You should now see a blank notebook.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Inside the ",Object(i.b)("strong",{parentName:"p"},"Cmd 1")," box, add the query and ",Object(i.b)("strong",{parentName:"p"},"Run Cell"),":"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SELECT * FROM databricks_demo.customer_addresses_dim_hive;"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Wait for the query to return, then select the drop-down graph type and choose ",Object(i.b)("strong",{parentName:"p"},"Map"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Under the Plot Options, remove all ",Object(i.b)("strong",{parentName:"p"},"Keys")," that are present.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Configure the map as follows:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Keys: ",Object(i.b)("strong",{parentName:"li"},"state_code")),Object(i.b)("li",{parentName:"ul"},"Values: ",Object(i.b)("strong",{parentName:"li"},"customer_id"))),Object(i.b)("p",{parentName:"li"},"You should now see a plot of USA with color shading - dependent on the population density.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If desired, you can repeat this process except using the Texas state code instead of California."),Object(i.b)("p",{parentName:"li"},"Back in the ",Object(i.b)("strong",{parentName:"p"},"Hue")," interface, run the following command:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"INSERT INTO databricks_demo.customer_addresses_dim_hive SELECT * FROM retail_demo.customer_addresses_dim_hive WHERE state_code = 'TX';")),Object(i.b)("p",{parentName:"li"},"Repeat from step 3 to observe the results for Texas."))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You have now successfully replicated data from your HDP Sandbox to your ADLS Gen2 container and Databricks cluster. Contact ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://wandisco.com/contact"}),"WANdisco")," for further information about Fusion and what it can offer you.")),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you are unable to access the Ambari or Fusion UI, you may need admin assistance with your network configuration. See our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting#unable-to-access-ambari-cloudera-or-fusion-ui-on-vm"}),"Azure specific troubleshooting")," section for more detail.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/hdp_sandbox_troubleshooting"}),"Troubleshooting")," guide for help with this install.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/operation/hdp_sandbox_fusion_stop_start"}),"shutdown and start up")," guide for when you wish to safely shutdown or start back up the environment."))))}s.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,b(b({ref:t},l),{},{components:a})):r.a.createElement(u,b({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);