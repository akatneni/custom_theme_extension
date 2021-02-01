FROM node:14

RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-pip \
        python3-setuptools \
        groff \
        less \
    && pip3 install --upgrade pip \
    && apt-get clean

WORKDIR /usr/src/app
COPY theme_extension/ ./

RUN npm install
RUN npm run build


EXPOSE 8888



RUN pip install jupyterlab
RUN jupyter labextension install .


RUN mkdir /root/.jupyter/
RUN mkdir /root/.jupyter/lab
RUN mkdir /root/.jupyter/lab/user-settings
RUN mkdir /root/.jupyter/lab/user-settings/@jupyterlab/
RUN mkdir /root/.jupyter/lab/user-settings/@jupyterlab/apputils-extension
COPY theme_settings/ /root/.jupyter/lab/user-settings/@jupyterlab/apputils-extension/

# Run the application
CMD ["jupyter", "lab", "--ip", "0.0.0.0", "--allow-root"]