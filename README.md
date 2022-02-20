  # DeSign  
  ### **Welcome to DeSign**  
  Created by: Ruben Cristea, Lilly Sharples, Idan Tzurdecker and Barret Batten:  
  University of Georgia  
  Built with: Django, React Native, Web3.py, Ethereum, Ganache  
    
  #### **What it does**   
  DeSign provides a dashboard visualizer displaying required documents for a service to take place and offers a variety of features that   
enable storing auditable records on the blockchain and verifying a service took place appropriately via smart contract. The feature allows the client to be verified without having to expose his private key online.  This is done by signing the transaction locally, and then using the signed transaction online by sending into the ethereum network. By signing the transaction locally, it enables the user to use a cold storage for maximum security.

  #### **How it works**
  React native is used to handle the front end. 
  From react a request is sent to the backend, Django, where the request is handled to store files in the database or update the blockchain.
  Django sends a response back to the front end to inform the users of updates from the database or the blockchain.
  The blockchain is implemented using Web3.py and uses Ganache to simulate the ethereum network.
  
  #### **Inspiration**  

The Code of Conduct process at the University of Georgia is orchestrated by relationships between trained students and faculty, known as University Judiciary. In order to ensure due process, students and case administrators must keep up with a variety of documents, provide correct signatures, and store a heap of documentation in the Office of Student Conduct. Picture a group of people confused with what exactly is required of them, not to mention, if documents are presentable or stored in the correct location. Sound familiar?  

#### **Instructions to Setup**  
1) clone the latest repo  
2) Install and Ganache, and set the RPC SERVER address in views.py to ganache_url
3) Ensure Python 3.10 is installed
4) ``cd`` to backend directory
5) Setup Django backend  
6) Install pip packages
7) create MYSQL database "design"
8) ``run python manage.py migrate``
9) ``run python manage.py runserver``
10) open new terminal and cd to frontend directory
11) Install node packages
12) ``run npm start`` then click w  (after clicking w, the browser should open)


#### **How to use**
1) Open and run ganache (Quickstart is sufficient for our purposes)
2) pick two addresses, one of which you will need the private key from.
3) Attach any files that are needed to be uploaded.
4) Enter in the public key in the respective text box
5) Enter in the private key in the respective text box
6) Press submit to recieve the signed hash
      This is a signed hash that was done offline and has not been sent into the ethereum network  
7) Copy and paste the signed hash into the text box (unless it has been done automatically)
8) Press submit to complete the smart contract and recieve the transaction hash for reciept purposes.
